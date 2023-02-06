/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'dark-blue-bg': 'hsl(217, 54%, 11%)',
      'darkbluecard': 'hsl(216, 50%, 16%)',
      'dark-blue-line': 'hsl(215, 32%, 27%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'cyan-transparent': 'hsl(178, 100%, 50%, 50%)',
    },
    fontFamily: {
      'Outfit': ['Outfit', 'sans-serif']
    },
    fontWeight: {
      'light': '300',
      'normal': '400',
      'semibold': '600',
    },
    maxHeight: {
      '18px': '1.125rem',
    },
    borderRadius: {
      'sl': '10px',
      'lg': '15px',
      'full': '50%',
    },
  },
  plugins: [],
}
