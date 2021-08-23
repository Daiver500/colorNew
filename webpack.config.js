const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    "public/js/index.js",
    "public/js/modal.js",
  ],
  watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, +"public"),
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
