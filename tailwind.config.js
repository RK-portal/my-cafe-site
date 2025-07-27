/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'koto-brown-light': '#D2691E',
        'koto-brown': '#A0522D',
        'koto-brown-dark': '#8B4513',
        'koto-green-light': '#3C5E3C',
        'koto-green': '#2F4F2F',
        'koto-cream-light': '#FAF8F1',
        'koto-cream': '#F5F5DC',
      },
      fontFamily: {
        'serif': ['Noto Serif JP', 'serif'],
        'sans': ['Noto Sans JP', 'sans-serif'],
      }
    },
  },
  plugins: [],
}