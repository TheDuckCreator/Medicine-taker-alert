const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      shamrock: {
        50: "#e9f8f7",
        100: "#cbf7f0",
        200: "#97f2de",
        300: "#56eac8",
        400: "#29e4b7",
        500: "#06c780",
        600: "#06af65",
        700: "#0c9156",
        800: "#107249",
        900: "#105d3e",
      },
      steel: {
        50: "#f2fafb",
        100: "#ddf7fa",
        200: "#b3ecf5",
        300: "#7eddf1",
        400: "#3bc0eb",
        500: "#179de3",
        600: "#127bd1",
        700: "#1561ad",
        800: "#154a7f",
        900: "#133c62",
      },
      denim: {
        50: "#f4fafc",
        100: "#e2f6fb",
        200: "#bde8f8",
        300: "#91d5f6",
        400: "#53b2f4",
        500: "#2889f1",
        600: "#1d65e6",
        700: "#1d50c7",
        800: "#1b3d95",
        900: "#173273",
      },
      royalblue: {
        50: "#f5f7fb",
        100: "#ebeffa",
        200: "#d6d9f8",
        300: "#bfbef6",
        400: "#a094f5",
        500: "#8067f3",
        600: "#6446eb",
        700: "#5037d2",
        800: "#3f2da4",
        900: "#332680",
      },
      flamingo: {
        50: "#f7f6fa",
        100: "#f2ebf9",
        200: "#e5d1f6",
        300: "#d8b2f4",
        400: "#cd84f1",
        500: "#c158ef",
        600: "#a439e6",
        700: "#7d2dc9",
        800: "#5f259c",
        900: "#4b2079",
      },
      cerise: {
        50: "#fcf8f8",
        100: "#fceff3",
        200: "#f9d3e7",
        300: "#f7afd4",
        400: "#f779b4",
        500: "#f84d90",
        600: "#ee2f6b",
        700: "#cb2455",
        800: "#9c1e42",
        900: "#7a1935",
      },
      mango: {
        50: "#fbf8f3",
        100: "#fcf0e6",
        200: "#f9dcc7",
        300: "#f7bf96",
        400: "#f59156",
        500: "#f5672d",
        600: "#ea441d",
        700: "#c7331f",
        800: "#9d2921",
        900: "#7c221e",
      },
      orange: {
        50: "#faf6ea",
        100: "#faf0ca",
        200: "#f7e591",
        300: "#f2d04c",
        400: "#ecb01b",
        500: "#e78c0a",
        600: "#d66807",
        700: "#b34e0b",
        800: "#903d11",
        900: "#743112",
      },
      sunglow: {
        50: "#faf8ee",
        100: "#faf5cf",
        200: "#f4ed8d",
        300: "#eddd46",
        400: "#dcc116",
        500: "#caa207",
        600: "#ac7e04",
        700: "#875f07",
        800: "#68490c",
        900: "#51390e",
      },
      olive: {
        50: "#fafaf4",
        100: "#f8f9dc",
        200: "#f0f29d",
        300: "#e3e556",
        400: "#c2cc1c",
        500: "#97b009",
        600: "#6f8d05",
        700: "#556d08",
        800: "#41510c",
        900: "#323f0d",
      },
    },
    fontFamily: {
      sans: ["kanit", "sans-serif"],
      mono: ["Consolas", "Menlo", "Fira Code", "Noto Sans Mono", "Monospaced"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
