import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi-Regular", "sans-serif"],
        serif: ["Satoshi-Regular", "serif"],
        mono: ["Satoshi-Regular", "monospace"],
        variable: ["Satoshi-Variable", "sans-serif"],
        light: ["Satoshi-Light", "sans-serif"],
        medium: ["Satoshi-Medium", "sans-serif"],
        bold: ["Satoshi-Bold", "sans-serif"],
        black: ["Satoshi-Black", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
};
export default config;
