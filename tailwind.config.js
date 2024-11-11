/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        pastSE: "350px",
        "3xl": "1900px",
        "4xl": "2300px",
        "5xl": "3000px",
      },
    },
  },
  plugins: [],
};
