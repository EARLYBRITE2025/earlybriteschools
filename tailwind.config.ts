/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E1F5FE',
        secondary: '#FFF0CC',
        accent: '#FFE66D',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        baloo2: ['var(--font-baloo2)', 'cursive'], // 👈 match variable name
      },
    },
  },
  plugins: [],
};
