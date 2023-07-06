/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: "#3D00B7",
        paragraph: "#565656",
        paragraph2: "#696969",
        success: "#14C8B0",
        danger: "#FF002E",
        fb: "#3B5998",
        twitter: "#55ACEE",
        lin: "#007AB9",
        button: "#2639ED"
      },
    },
  },
  plugins: [],
}

