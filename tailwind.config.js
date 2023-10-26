/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primarychimpa: {
          DEFAULT: '#00214B',
          700: '#01253B'
        },
        yellow: '#FDDB00',
        lightBlue: {
          DEFAULT: '#36A9E1',
          800: '#136891'
        }
      },
      borderColor: {
        'custom-yellow': '#FDDB00',
      },
    },
  },
  plugins: [],
}

