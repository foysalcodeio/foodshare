/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins : "'Poppins'",
        ubuntu : "Ubuntu",
        
      },
      colors:{
        "hash-green" : "#00615F",
        "txt-color" : "#DEE3E3",
        "off-white" : "F9F3F0",
        "light-orange": "FF7973"
      }
    },
  },
  plugins: [],
}