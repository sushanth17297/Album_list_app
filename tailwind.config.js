module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ".html"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
