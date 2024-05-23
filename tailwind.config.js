/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent: "#FF851C",
        accentDark: "#E43D11",
      },
      container: {
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
}
