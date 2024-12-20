/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom keyframes for the shining effect
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-100%' },
          '100%': { backgroundPosition: '200%' },
        },
      },
      // Add the animation to the theme
      animation: {
        shine: 'shine 3s linear infinite',
      },
      // Extend the background size for the gradient
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
};
