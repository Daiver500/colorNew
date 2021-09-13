const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  watch: true,
  entry: [
    "./js/index.js",
    "./js/modal.js",
    "./js/menu.js",
    "./js/offers.js",
    "./js/calculator.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: [miniCss.loader, "css-loader?url=false", "sass-loader"]
    }, ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
  devtool: false,
};
