/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        flipGrey: {
          "0%": {
            background: "white",
            transform: "scaleY(1)",
          },
          "50%": {
            background: "white",
            transform: "scaleY(0)",
          },
          "100%": {
            background: "rgb(107 114 128 / 1)",
            transform: "scaleY(1)",
          },
        },
        flipYellow: {
          "0%": {
            background: "white",
            transform: "scaleY(1)",
          },
          "50%": {
            background: "white",
            transform: "scaleY(0)",
          },
          "100%": {
            background: "background-color: rgb(253 224 71 / 1)",
            transform: "scaleY(1)",
          },
        },
        flipGreen: {
          "0%": {
            background: "white",
            transform: "scaleY(1)",
          },
          "50%": {
            background: "white",
            transform: "scaleY(0)",
          },
          "100%": {
            background: "rgb(74 222 128 / 1)",
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        flipGrey: "flipGrey 500ms linear forwards",
        flipYellow: "flipYellow 500ms linear forwards",
        flipGreen: "flipGreen 500ms linear forwards",
      },
    },
  },
  plugins: [],
};
