import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        current: "currentColor",
        red: colors.red,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        green: colors.green,
        primary: "#1BD1C2",
        secondary: "#3390FF",
        title: "#0B1928",
        text: "#3E4757",
        border: "#848EA080",
        "second-border": "#848EA033",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(134.83deg, #1F67E7 35.46%, #1AD7BE 100%)",
      },
      boxShadow: {
        global: [
          "0px 1px 2px 0px #0000000D",
          "0px 3px 3px 0px #0000000A",
          "0px 8px 5px 0px #00000008",
          "0px 14px 6px 0px #00000003",
          "0px 22px 6px 0px #00000000",
        ].join(", "),
      },
    },
    screens: {
      sm: "640px",
      md: "992px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1500px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        xl: "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
