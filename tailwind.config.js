/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'softViolet': 'hsl(273, 75%, 66%)',
        'softBlue': "hsl(240, 73%, 65%)",
        'veryDarkDesaturatedBlue': "hsl(238, 29%, 16%)",
        'darkGrayishBlue': "hsl(240, 6%, 50%)",
        'veryDarkGrayishBlue': "hsl(237, 12%, 33%)",
        'lightGrayishBlue': "hsl(240, 5%, 91%)",
        'softRed': "hsl(14, 88%, 65%)"
      }
    },
  },
  plugins: [],
}
