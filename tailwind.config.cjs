/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        bg1: 'var(--bg-1)',
        bg2: 'var(--bg-2)',
        accent: 'var(--accent)',
        heaven: {
          1: 'var(--heaven-1)',
          2: 'var(--heaven-2)',
          accent: 'var(--heaven-accent)'
        },
        hell: {
          1: 'var(--hell-1)',
          2: 'var(--hell-2)',
          accent: 'var(--hell-accent)'
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'Uncial Antiqua', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};
