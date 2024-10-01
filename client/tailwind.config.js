/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-medium': 'spin 2s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
        'scale': 'scale 2s ease-in-out infinite',
        'fade': 'fade 3s ease-in-out infinite',
        'shrink': 'shrink 2.5s ease-in-out infinite',
        'fade-in-out': 'fadeInOut 1.5s ease-in-out infinite',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};