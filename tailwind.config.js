/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Add support for TypeScript and React
  ],  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
      colors:{
        primary:{
          DEFAULT: '#107634', // Default primary color
          50: '#BCF5D0',      // Lightest shade
          100: '#7AECA2',     // Lighter shade
          200: '#37E373',     // Light shade
          300: '#18B750',     // Regular shade
          400: '#107634',     // Dark shade
        },
        secondary: {
          DEFAULT: '#EECD15', // Default secondary color
          50: '#FBF5D0',      // Lightest shade
          100: '#F8EBA2',     // Lighter shade
          200: '#F4E173',     // Light shade
          300: '#F1D745',     // Regular shade
          400: '#EECD15',     // Dark shade
        },
        white:'#FFFFFF', 
      }
    },
  },
  plugins: [],
}

