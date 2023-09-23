/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"', "sans-serif"],
    },

    extend: {
      colors: {
        "dark-elements": "hsl(209, 23%, 22%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "dark-bg": "hsl(207, 26%, 17%)",
        "light-elements": "hsl(0, 0%, 100%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-bg": "hsl(0, 0%, 98%)",
        "light-input": "hsl(0, 0%, 52%)",
      },
      fontSize: {
        homepage: "14px",
        details: "16px",
      },
      screens: {
        md: "600px",
      },
    },
  },
  plugins: [],
};
