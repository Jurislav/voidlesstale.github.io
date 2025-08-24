import { useEffect, useState } from 'react';

export default function DevlogList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/devlog/index.json').then(r => r.json()).then(setPosts);
  }, []);
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {posts.map(p => (
        <a key={p.slug} href={`/devlog/${p.slug}`} className="block p-4 rounded-2xl bg-bg2 shadow-card enter" aria-label={`Open ${p.title}`}>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm opacity-80">{new Date(p.date).toLocaleDateString()}</p>
          <p className="mt-2 text-sm">{p.summary}</p>
        </a>
      ))}
    </div>
  );
}
