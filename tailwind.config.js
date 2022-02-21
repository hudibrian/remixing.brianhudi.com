module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}'],
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#232630',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Roboto', 'Hind'],
      serif: ['Trykker'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
