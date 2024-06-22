/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'green': '#0dde45',
        'hover-green': '#1fe054',
        'gray': '#a3a3a3'
      },
    },
  },
  plugins: [],
}

