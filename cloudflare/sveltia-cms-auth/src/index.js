/**
 * Based on the Sveltia CMS Authenticator flow for Cloudflare Workers.
 * Fill in the required Worker secrets before deploying.
 */
const supportedProviders = ['github'];

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const outputHTML = ({ provider = 'unknown', token, error, errorCode }) => {
  const state = error ? 'error' : 'success';
  const content = error ? { provider, error, errorCode } : { provider, token };

  return new Response(
    `<!doctype html><html><body><script>
      (() => {
        window.addEventListener('message', ({ data, origin }) => {
          if (data === 'authorizing:${provider}') {
            window.opener?.postMessage(
              'authorization:${provider}:${state}:${JSON.stringify(content)}',
              origin
            );
          }
        });
        window.opener?.postMessage('authorizing:${provider}', '*');
      })();
    </script></body></html>`,
    {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Set-Cookie': 'csrf-token=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure',
      },
    },
  );
};

const handleAuth = async (request, env) => {
  const { origin, searchParams } = new URL(request.url);
  const { provider, site_id: domain } = Object.fromEntries(searchParams);

  if (!provider || !supportedProviders.includes(provider)) {
    return outputHTML({
      error: 'Your Git backend is not supported by the authenticator.',
      errorCode: 'UNSUPPORTED_BACKEND',
    });
  }

  const {
    ALLOWED_DOMAINS,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GITHUB_HOSTNAME = 'github.com',
  } = env;

  if (
    ALLOWED_DOMAINS &&
    !ALLOWED_DOMAINS.split(/,/).some((entry) =>
      (domain ?? '').match(
        new RegExp(`^${escapeRegExp(entry.trim()).replace('\\*', '.+')}$`),
      ),
    )
  ) {
    return outputHTML({
      provider,
      error: 'Your domain is not allowed to use the authenticator.',
      errorCode: 'UNSUPPORTED_DOMAIN',
    });
  }

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    return outputHTML({
      provider,
      error: 'OAuth app client ID or secret is not configured.',
      errorCode: 'MISCONFIGURED_CLIENT',
    });
  }

  const csrfToken = crypto.randomUUID().replaceAll('-', '');
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'repo,user',
    state: csrfToken,
  });

  return new Response('', {
    status: 302,
    headers: {
      Location: `https://${GITHUB_HOSTNAME}/login/oauth/authorize?${params.toString()}`,
      'Set-Cookie':
        `csrf-token=${provider}_${csrfToken}; ` +
        'HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure',
    },
  });
};

const handleCallback = async (request, env) => {
  const { origin, searchParams } = new URL(request.url);
  const { code, state } = Object.fromEntries(searchParams);
  const [, provider, csrfToken] =
    request.headers.get('Cookie')?.match(/\bcsrf-token=([a-z-]+?)_([0-9a-f]{32})\b/) ?? [];

  if (!provider || !supportedProviders.includes(provider)) {
    return outputHTML({
      error: 'Your Git backend is not supported by the authenticator.',
      errorCode: 'UNSUPPORTED_BACKEND',
    });
  }

  if (!code || !state) {
    return outputHTML({
      provider,
      error: 'Failed to receive an authorization code. Please try again later.',
      errorCode: 'AUTH_CODE_REQUEST_FAILED',
    });
  }

  if (!csrfToken || state !== csrfToken) {
    return outputHTML({
      provider,
      error: 'Potential CSRF attack detected. Authentication flow aborted.',
      errorCode: 'CSRF_DETECTED',
    });
  }

  const {
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GITHUB_HOSTNAME = 'github.com',
  } = env;

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    return outputHTML({
      provider,
      error: 'OAuth app client ID or secret is not configured.',
      errorCode: 'MISCONFIGURED_CLIENT',
    });
  }

  let response;

  try {
    response = await fetch(`https://${GITHUB_HOSTNAME}/login/oauth/access_token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
      }),
    });
  } catch {
    return outputHTML({
      provider,
      error: 'Failed to request an access token. Please try again later.',
      errorCode: 'TOKEN_REQUEST_FAILED',
    });
  }

  let token = '';
  let error = '';

  try {
    ({ access_token: token, error } = await response.json());
  } catch {
    return outputHTML({
      provider,
      error: 'Server responded with malformed data. Please try again later.',
      errorCode: 'MALFORMED_RESPONSE',
    });
  }

  return outputHTML({ provider, token, error });
};

export default {
  async fetch(request, env) {
    const { method, url } = request;
    const { pathname } = new URL(url);

    if (method === 'GET' && ['/auth', '/oauth/authorize'].includes(pathname)) {
      return handleAuth(request, env);
    }

    if (method === 'GET' && ['/callback', '/oauth/redirect'].includes(pathname)) {
      return handleCallback(request, env);
    }

    if (method === 'GET' && pathname === '/') {
      return new Response('Sveltia CMS auth worker is running.', { status: 200 });
    }

    return new Response('', { status: 404 });
  },
};
