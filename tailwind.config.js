/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        mobile_background: 'url(/public/assets/images/bg-sidebar-mobile.svg)',
        desktop_background: 'url(/public/assets/images/bg-sidebar-desktop.svg)'
      },
      planIcon: {
        arcade: 'url(/public/assets/images/icon-arcade.svg)',
        advanced: 'url(/public/assets/images/icon-advanced.svg)',
        pro: 'url(/public/assets/images/icon-pro.svg)'
      }
    }
  },
  plugins: []
};
