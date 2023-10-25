/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile_background: "url(/public/assets/images/bg-sidebar-mobile.svg)",
      },
    },
  },
  plugins: [],
};
