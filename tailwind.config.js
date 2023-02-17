/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   display: ["Inter"],
    //   test: ["RubikSprayPaint-Regular"],
    // },
    extend: {
      backgroundImage: {
        headerBg: "url('/images/veses-title.jpg')",
        section4Bg: "url('/images/poster-anna-bg.png')",
        section4CharBg: "url('/images/poster-anna-char.png')",
      },
    },
  },
  plugins: [],
};
