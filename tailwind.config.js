/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '2': '0.5rem',   // Add custom font size
        '2.5': '0.625rem', // Example of another custom size
      },
      colors: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
});
