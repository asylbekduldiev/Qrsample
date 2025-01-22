/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        img: '#2C7DFA',
        h2: "#1F314F",
        h1: "#68778D",
      }
    },
  },
  plugins: [],
}

