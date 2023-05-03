/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: '#2980b9',
      skyBlue: '#6dd5fa',
      aquamarine: 'aquamarine',
      mediumpurple: 'mediumpurple',
      dark: '#111',
      lightDark: '#1a1a1a',
      inactiveTab: '#262626',
      inactiveTabTxt: '#b3b3b3',
      formHead: 'rgb(30, 30, 33)',
      formBody: 'rgb(34, 34, 38)',
      toastBg: 'rgb(78, 214, 157)',
      toastSuccess: 'rgb(56, 225, 105)',
      gradient_1: '#21404F',
      gradient_2: '#213E4E',
      gradient_3: '#233A4D',
      gradient_4: '#24324B',
      gradient_5: '#ffffff0d',
      preLoaderBg: 'rgb(20, 20, 20)'
    },
    extend: {
      keyframes: {
        rotate: {
          'from': { rotate: '0' },
          '50%': { scale: '1 1.5' },
          'to': { rotate: '360' }
        }
      },
      animation: {
        rotate: 'rotate 20s infinite'
      },
      spacing: {
        '375': '26px',
        '425': '35px',
        '768': '75px',
        '1024': '120px',
        '1280': '190px',
        '1440': '220px',
        '1600': '260px',
        '1920': '310px',
      },
      screens: {
        '425': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        '1280': '1280px',
        '1440': '1400px',
        '1600': '1600px',
        '1920': '1920px',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        AkiraExpanded: ['AkiraExpanded', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
}

