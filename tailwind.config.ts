import type { Config } from 'tailwindcss'

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00c6ad",
          secondary: "#0d00ff",
          accent: "#839400",
          neutral: "#0c0200",
          "base-100": "#fafffc",
          info: "#018dff",
          success: "#00e5aa",
          warning: "#c79100",
          error: "#ff8a88",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

