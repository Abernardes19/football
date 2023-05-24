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
        "blue-1": "#0f1531",
        "black-1": "#000004",
        "gray-1": "#ced4da",
        "gray-2": "#aca4ac",
        "beige": "#eaedeb"
      }
    },
  },
  plugins: [],
}

