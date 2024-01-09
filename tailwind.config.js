

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '11': '3rem',
      },
      colors: {
        customLime: '#ECEEB2', // Custom color definition
        customGreen: {
          500: '#00FF00', // Different shades of a custom color
          700: '#007700',
        },
      },

      width: {
        '25': '1.563rem', // Custom width value
      },
      height: {
        '25': '1.563rem', // Custom height
      },
      borderWidth: {
        'custom': '8.7px 5px 0 5px', // Define a custom border width
      },
      borderWidth: {
        'custom-mobile': '6.7px 4px 0 4px', // Define a custom border width for mobile
      },
      screens: {
        'phn': {'max': '640px'}, // => @media (min-width: 640px) { ... }
  
        'tablet': {'max': '1080px'},
        // => @media (min-width: 1024px) { ... }
  
        'desktop': {'max': '1140px'},
        // => @media (min-width: 1280px) { ... }
      },

    },
  },
  plugins: [],
}