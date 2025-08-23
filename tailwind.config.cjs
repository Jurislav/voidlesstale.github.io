/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        surface: "#12151c",
        panel: "#161b22",
        edge: "#2a2f3a",
        text: "#e5e7eb",
        mute: "#9ca3af",
        primary: "#8b5cf6",
        primarySoft: "#a78bfa"
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 30px rgba(0,0,0,0.35)"
      },
      borderRadius: { xl2: "1.25rem" }
    },
  },
  plugins: [],
};
