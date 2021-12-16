module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dosis': "'Dosis', sans-serif",
      }, 
      animation:{
        'bounce-slow': "bounce 7.5s infinite",
        'bounce-little-fast': "bounce 4s infinite"
      },
      transitionDuration: {
        "3000": "3000ms"
      }
    },
  },
  plugins: [],
}