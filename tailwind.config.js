/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      rotate: {
        '60': '60deg',
      },
      translate: {
        't': '1.75rem',
        'j': '5.1rem',
      },
      scale: {
        '200': '2.0'
      },
      height: {
        '400': '400rem'
      }
    },
  },
  plugins: [],
}
