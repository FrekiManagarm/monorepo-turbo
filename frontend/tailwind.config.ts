import type { Config } from "tailwindcss";
import { resolve } from "path";

export default {
  content: [
    resolve(__dirname, "./app/**/*.{js,jsx,ts,tsx}"),
    resolve(__dirname, "./app/*.{js,jsx,ts,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
