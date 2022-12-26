/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#c5e15a',
      'secondary' : '#7EA310',
      'text-color': '#213502'
    },
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        NotoSans: ["Noto Sans"]
      },
    },
  },
  plugins: [],
}
