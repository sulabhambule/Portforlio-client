/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0d2438',
        'secondary-light': '#ffffff',
        'darkk': '#1e3851',
        'gray-dark': 'rgba(30, 56, 81, 1)',
        'secondary-dark':'#102d44',
        'ter-dark': '#1e3851'
      },
    },

  },
  plugins: [],
}

