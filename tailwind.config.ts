import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwindcss-react-aria-components')]
  ,
  daisyui: {
    themes: ["light", "dark", "cupcake"]  },
} satisfies Config;
