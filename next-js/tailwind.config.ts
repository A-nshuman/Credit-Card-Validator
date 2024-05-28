import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#202020",
        secondary: "#2b2b2b",
        primary: "#e6f2f2",
        accent: "#9bdbde",
        blue: "#2b83e2",
        red: "#ff6666",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;

{/*
    $brighter-blue : #007fff;
    $bright-green : #00ff00;
    $bright-blue : #2b83e2;
    $dull-yellow : #ffcc33;
    $bright-red : #df2525;
    $dull-blue : #84d5ed;
    $dull-red : #FF6666;
    $orange : #ff7722;
    $light : #2b2b2b;
    $dark : #202020;
    $lime : #b3d23e;
*/}