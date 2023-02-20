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
        section5Bg11: "url('/images/loli-banner-bg.jpg')",
        section5Bg12: "url('/images/loli-banner-loli.png')",
        section5Bg21: "url('/images/gameboi-banner-bg.jpg')",
        section5Bg22: "url('/images/gameboi-banner.png')",
        section5Bg31: "url('/images/emily-banner-bg.jpg')",
        section5Bg32: "url('/images/emily-banner_emily.png')",
        btmBg: "url('/images/veses-bg.jpg')",
      },
    },
  },
  plugins: [],
};
