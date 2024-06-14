/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
    // "../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: "codec pro regular",
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
