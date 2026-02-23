// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050414",
        secondary: "#0a0921",
        accent: "#8245ec",
        "accent-light": "#a855f7",
        "accent-dark": "#6a32c9",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 0 50px -12px rgba(130, 69, 236, 0.25)',
        'accent': '0 0 20px rgba(130, 69, 236, 0.4)',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.15)' },
          '66%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.05)' },
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        gradient: 'gradient 8s ease infinite',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        'premium-gradient': 'linear-gradient(90deg, #8245ec, #a855f7)',
      },
    },
  },
  plugins: [],
};
