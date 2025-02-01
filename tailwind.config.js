/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'electric-violet': {
          '50': '#fcf4ff',
          '100': '#f8e6ff',
          '200': '#f2d1ff',
          '300': '#e8adff',
          '400': '#db79ff',
          '500': '#cd47ff',
          '600': '#bf23fa',
          '700': '#a012d3',
          '800': '#8c15b4',
          '900': '#721390',
          '950': '#52006c',
        },
      },
    }
  },
  plugins: [],
}

