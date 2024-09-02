/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "dark-1": "#363C43",
        "dark-2": "#161718",
        "button-primary": "#1D1D1D",
        "button-active": "#28292F",
        "text-primary": "#969696",
      },
    },
  },
  plugins: [],
};
