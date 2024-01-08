

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

    },
  },
  plugins: [],
}