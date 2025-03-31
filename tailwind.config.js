/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // ...
},
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          name: {
              words: ['Hello world... I am Juan David '],
              repeat: 0,
              eraseSpeed: 0,
              writeSpeed: 0.1,
              delay: 0.1
          }
      }
  })
  ]
}
