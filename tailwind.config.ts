import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf8f1",
        sand: "#eee4d5",
        linen: "#f4ede2",
        teal: "#215b5a",
        "teal-dark": "#163f40",
        sage: "#c5d2c8",
        ink: "#304342",
        terracotta: "#ad715e",
      },
      boxShadow: {
        soft: "0 18px 44px rgba(35, 75, 72, 0.08)",
        card: "0 10px 30px rgba(35, 75, 72, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
