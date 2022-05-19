module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
    {
      pattern: /bg-(red|green|blue|gray)-(100|200|300|400|500|600|700|800)/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
