/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6600',
          50: '#fff5eb',
          100: '#ffe5cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff6600',
          600: '#cc5200',
          700: '#993d00',
          800: '#662900',
          900: '#331400',
        },
        secondary: {
          DEFAULT: '#001f5f',
          50: '#e6eaf2',
          100: '#ccd5e5',
          200: '#99abcb',
          300: '#6681b1',
          400: '#335797',
          500: '#001f5f',
          600: '#001940',
          700: '#001330',
          800: '#000d20',
          900: '#000610',
        },
      },
    },
  },
  plugins: [],
}
