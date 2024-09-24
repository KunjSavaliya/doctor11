module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // Start off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // End off-screen to the left
        },
      },
      animation: {
        // Increase the duration for a slower, smoother scroll
        marquee: 'marquee 40s linear infinite', // 15s makes it much slower and smooth
      },
    },
  },
  plugins: [],
};
