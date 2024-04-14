module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#609966',
      },
      keyframes: {
        animate: {
          '0%, 10%, 100%': {
            width: '0%'
          },
          '70%, 80%, 90%': {
            width: '100%'
          }
        }
      },
    },
    animation: {
      animate: 'animate 6s linear infinite'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
