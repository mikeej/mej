module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      pacific: '#009CBF',
      smokey: '#F8F8F8',
      razzle: '#DF0C49',
      orange: '#F55B24',
      nero: '#1A1717',
      persia: '#00A49B',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px'
    },
    extend: {
      fontSize: {
        sm: '1.2rem',
        base: '1.6rem',
        lg: '2.4rem',
        xl: '3.6rem'
      }
    }
  },
  variants: {
    textColor: ['hover'],
    opacity: ['hover'],
  },
  corePlugins: {
    container: false,
  }
}
