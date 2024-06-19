import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "au-text": "#e8eff7",
        "au-background": "#000914",
        "au-primary": "#90b3d8",
        "au-secondary": "#7c2c38",
        "au-accent": "#c59b5b",
      },
    },
  },
  plugins: [],
};

export default config;
