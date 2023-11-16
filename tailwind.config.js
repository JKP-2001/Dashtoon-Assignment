/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ["Rampart One", "cursive"],
      'handwritten':[ 'Kalam', "cursive"],
      'Button':['IBM Plex Sans', 'sans-serif'],
      'handwritten2':['Playpen Sans', 'cursive']
    },
  },
  plugins: [],
}