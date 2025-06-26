// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'], // make sure your paths are correct
  theme: {
    extend: {
      colors: {
        primary: '#e63946',
        'primary-dull': '#d62828',
      },
    },
  },
  plugins: [],
};
