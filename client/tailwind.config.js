/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGrey: "#F4F5F8",
        primaryBlack: "#2B2B2B",
        primaryBlue: "#2E51B8",
        secondaryText:"#E2E2E2"
      },
      fontFamily:{
        logo: ["Orbitron", "sans-serif"],
        openSans:["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};
