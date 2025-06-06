import type { Config } from "tailwindcss";
import plugin from "tailwindcss-animate";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [plugin],
} as Config;
