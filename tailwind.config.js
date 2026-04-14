/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#1a1f2e',
        },
      },
      fontFamily: {
        regular: ['Montserrat-Regular', 'system-ui', 'sans-serif'],
        bold: ['Montserrat-Bold', 'system-ui', 'sans-serif'],
        sans: ['Montserrat-Regular', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
