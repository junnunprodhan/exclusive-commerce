import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10px",
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "720px",
        // => @media (min-width: 768px) { ... }

        lg: "960px",
        // => @media (min-width: 1024px) { ... }

        xl: "1140px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#db4444",
      },
    },
  },
  plugins: [],
};
export default config;
