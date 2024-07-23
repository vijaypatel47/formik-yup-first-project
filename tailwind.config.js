/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/Registration/index.tsx',
    './src/components/Login/index.tsx',
    './src/App.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

