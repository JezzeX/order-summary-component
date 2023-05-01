/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('img/pattern-background-desktop.svg')",

      },
      colors: {
        //Primary
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",

        //Neutral
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        redHatDisplay: ["Red Hat Display", "sans-serif"],
      }
    },
  },
  plugins: [],
}

