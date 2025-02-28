/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'emselca': {
          'blue': '#3aa7df',      // Azul turquesa
          'yellow': '#fee810',    // Amarillo
          'cream': '#f0f7e6',     // Crema
          'green': '#006a37',     // Verde oscuro
          'green-light': '#94c385', // Verde claro
          'gray': '#828482',      // Gris
          'gray-blue': '#99b3af', // Gris azulado
          'gray-light': '#bcbcbb', // Gris claro
          'blue-light': '#65c1ce', // Versión más clara del azul turquesa
          'yellow-light': '#f2e04d', // Versión más clara del amarillo
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #3aa7df, #006a37)',
        'gradient-secondary': 'linear-gradient(180deg, #006a37, #3aa7df)',
        'gradient-accent': 'linear-gradient(90deg, #3aa7df, #fee810)',
        'gradient-hero': 'linear-gradient(90deg, rgba(58,167,223,0.9), rgba(58,167,223,0.7))',
        'gradient-footer': 'linear-gradient(180deg, #3aa7df, #006a37)'
      }
    },
  },
  plugins: [],
}