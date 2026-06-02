import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf7ef",
        sand: "#efe6d7",
        linen: "#f6efe4",
        teal: "#164e52",
        "teal-dark": "#103c40",
        sage: "#bfd0c7",
        ink: "#243536",
        terracotta: "#b66e54",
      },
      boxShadow: {
        soft: "0 12px 35px rgba(28, 73, 73, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
