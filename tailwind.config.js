/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#f8f6f1',
        ink: '#0a0a0a',
        accent: '#2c5f8a',
        'accent-light': '#e8f0f7',
        border: '#e2ddd5',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'scroll-line': 'scrollLine 2s infinite 1s',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}
