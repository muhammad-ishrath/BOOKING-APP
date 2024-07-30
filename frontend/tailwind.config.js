/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    //override tailwind here 
    container: {
      padding: "10rem",
    },
  },
  plugins: [],
}

