/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f19',
        card: 'rgba(17, 24, 39, 0.7)',
        border: 'rgba(255, 255, 255, 0.1)',
        neon: {
          cyan: '#00f2fe',
          purple: '#a855f7',
          blue: '#3b82f6',
          lime: '#84cc16'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
