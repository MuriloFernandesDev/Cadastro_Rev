/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        Loja: '#201942',
        '--glass-blur': '10px',
        'purple-store': '#201942',
        dark: '#161C24',
        dark_doubts: '#212B36',
        button: '#FD4357',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#201942',
          'base-200': '#212b36',
          '--glass-blur': '15px',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
}
