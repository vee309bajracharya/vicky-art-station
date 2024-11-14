/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      colors:{
        'primaryColor': '#0A30DA',
        'secondaryColor': '#03045E',
        'lightColor': '#F5F5F5',
        'darkColor': '#181818',
        'footerBg': '#023E8A',
        'hoverColor': '#00b4d8',
        'btnColor': '#0077B6',
        'toggleBg': '#334195',

      },

      fontFamily:{
        'primaryFont': ['Teko'],
        'textFont': ['Satoshi'],
        'secondaryFont': ['Gambetta'],
        'mainTitleFont': ['Dancing Script'],
        
      },

      screens:{
        xs: '200px',
      }
    },
  },
  plugins: [],
  
}