/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#212529",
        "secondary-dark": "#282C34",
        wishlist: "#F9CA33",
        collection: "#5CD0F2",
      },
    },
  },
  plugins: [],
};
