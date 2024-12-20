/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          blue: "#00ffff",
          pink: "#ff00ff",
          purple: "#bf00ff",
          green: "#39ff14",
          yellow: "#ffff00",
        },
        cyber: {
          dark: "#0a0a0a",
          light: "#1a1a1a",
        },
      },
      backgroundImage: {
        "gradient-card": "linear-gradient(135deg, #ff00ff, #39ff14)", // Gradiente personalizado
      },
    },
    screens: {
      sm: "640px", // teléfonos pequeños
      md: "768px", // tabletas
      lg: "1024px", // laptops
      xl: "1280px", // escritorios grandes
    },
  },
  plugins: [],
};
