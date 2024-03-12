import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--color-background)',
        'background-contrast': 'var(--color-background-contrast)',
        'primary': 'var(--color-primary)',
        'primary-contrast': 'var(--color-primary-contrast)',
        'paper': 'var(--color-paper)',
        'text': 'var(--color-text)',
      }
    }
  },
  plugins: [],
};
export default config;
