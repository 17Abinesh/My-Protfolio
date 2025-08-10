/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue-color":"#00ADF1",
        "primary-pink-color":"#EF008D",
        "primary-yelow-color":"#FEF102",
        skyblue: '#98c1d9', // name it whatever you want
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}