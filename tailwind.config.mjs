/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        surface: "#10141a",
        panel: "#131821",
        edge: "#222834",
        text: "#e6e7ea",
        mute: "#9aa3ae",
        primary: "#8b5cf6",
        primarySoft: "#a78bfa",
        accent: "#7c3aed"
      },
      borderRadius: { xl2: "1.25rem" },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,.03) inset, 0 12px 40px rgba(0,0,0,.45)"
      },
      backgroundImage: {
        "vt-grid": "radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,.06) 1px, transparent 0)"
      }
    }
  },
  plugins: [],
};
