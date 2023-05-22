/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-1": "#06130a",
        "green-1": "#1e3a3c",
        "brown-1": "#322211",
        "brown-2": "#696054",
        "brown-3": "#adab9e"
      }
    },
  },
  plugins: [],
}

