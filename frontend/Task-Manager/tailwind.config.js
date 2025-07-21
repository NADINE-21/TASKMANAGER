 /** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1368EC',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
