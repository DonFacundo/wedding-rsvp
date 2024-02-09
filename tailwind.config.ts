import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wedding-1": "url('/assets/img/weddingrsvp1.JPG')",
        "wedding-2": "url('/assets/img/weddingrsvp2.JPG')",
        "wedding-1-mob": "url('/assets/img/weddingrsvp1-mob.JPG')",
        "wedding-2-mob": "url('/assets/img/weddingrsvp2-mob.JPG')",
        "autumn-leaves-alt": "url('/assets/img/autumn-leaves-alt.png')",
        "autumn-leaves": "url('/assets/img/autumn-leaves-home.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        weddingtheme: {
          primary: "#59362f",

          secondary: "#ddbaa2",

          accent: "#006da9",

          neutral: "#ddbaa2",

          "base-100": "#B16B5E",

          info: "#00dbff",

          success: "#00d578",

          warning: "#c39688",

          error: "#ff6870",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
