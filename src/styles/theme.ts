export const theme = {
  colors: {
    default1: '#0c0c0cff',
    default2: '#ffffff',
    default3: '#d8d8d8ff',

    //10%
    text: '#4e4b43ff',
    btn: '#e47846ff',
    btnHover: '#ee6628ff',
    btnActive: '#e66123ff',
    //30%
    medium1: '#ffc8fbff',
    medium2: ' #ff92c2ff',
    //60%
    background1: '#ffeef2ff',
    background2: '#ffe4f3ff',
  },

  spacing: {
    xs: '5px',
    sm: '10px',
    md: '30px',
    lg: '50px',
    xl: '150px',
  },

  fonts: {
    title: 'var(--font-title), sans-serif',
    text: 'var(--font-text), sans-serif',
  },

  fontSizes: {
    titleSmall: 'clamp(18px, 2vw, 2em)',
    titleMedium: 'clamp(25px, 2.5vw, 3em)',
    titleLarge: 'clamp(30px, 7vw, 4em)',

    text: 'clamp(12px, 1vw, 2em)',
    textMedium: 'clamp(18px, 1vw, 3em)',
    textBig: 'clamp(20px, 3vw, 4em)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    tv: '1500px',
  },
};
