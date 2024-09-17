/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          50 :'#bc8a5f',
          100: "#8b603b",
          200 : "#87561e",
          300: "#896642",
          400 : '#724b29',
          500: "#a76a32",
          600: "#c08552",
          700: "#977669",
          800: "#846358",
          900: "#5e3023",
          // brown : '#c08552',
          // lightBrown : '#ffe8d6',
          // darkbrown : '#5e3023'
        },
      },
    },
  },
  plugins: [],
};
