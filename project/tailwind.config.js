/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Century Gothic', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        'emselca': {
          'blue': '#3cadbc',      // Azul turquesa
          'yellow': '#eed820',    // Amarillo
          'cream': '#f0f7e6',     // Crema
          'green': '#0c7038',     // Verde oscuro
          'green-light': '#94c385', // Verde claro
          'gray': '#828482',      // Gris
          'gray-blue': '#99b3af', // Gris azulado
          'gray-light': '#bcbcbb', // Gris claro
          'blue-light': '#65c1ce', // Versión más clara del azul turquesa
          'yellow-light': '#f2e04d', // Versión más clara del amarillo
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #3cadbc, #0c7038)',
        'gradient-secondary': 'linear-gradient(180deg, #0c7038, #3cadbc)', // CTA: verde a azul
        'gradient-accent': 'linear-gradient(90deg, #3cadbc, #eed820)',
        'gradient-hero': 'linear-gradient(90deg, rgba(60,173,188,0.95), rgba(12,112,56,0.95))',
        'gradient-footer': 'linear-gradient(180deg, #3cadbc, #0c7038)' // Footer: azul a verde
      }
    },
  },
  plugins: [],
}