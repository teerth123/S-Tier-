/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        geist: ['"Geist"', 'sans-serif'],
        onest: ['"Onest"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
