import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      au: {
        text: "#e0e6ec",
        background: "#000914",
        primary: "#9fb3cc",
        secondary: "#354d6b",
        accent: "#6289b8",
      },
    },
  },
  plugins: [],
};

export default config;
