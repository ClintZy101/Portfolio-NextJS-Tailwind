module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'dark-bg': '#0F1624',
        'light-bg': '#95a3bd',
      }
    },
  },
  variants: {
    extend: {
    
    },
  },
  plugins: [],
}
