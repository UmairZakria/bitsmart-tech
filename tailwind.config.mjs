/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        prime : "var(--prime)",
        secbg : "var(--secbg)",
        blues : "var(--blues)"


      },
      fontFamily: {
        poppins: ["SpaceGrotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
