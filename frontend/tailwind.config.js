/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#875cf5", // this fixes bg-primary
      },
    },
  },
  plugins: [],
};
