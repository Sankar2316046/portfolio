import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0B0F19',
        'neon-blue': '#00F5FF',
        'soft-purple': '#7F5AF0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple-blue': 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(0, 245, 255, 0.5)',
        'neon-lg': '0 0 50px rgba(0, 245, 255, 0.8)',
        'purple-glow': '0 0 30px rgba(127, 90, 240, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
