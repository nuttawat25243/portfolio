/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-seriff'],
        'play': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

