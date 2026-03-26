/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.28)',
      },
      maxWidth: {
        container: '78rem',
      },
    },
  },
  plugins: [],
};
