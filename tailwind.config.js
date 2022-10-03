module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
  // important: true, // 最優先にする
}
