// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// module.exports = {
//   mode: "production",
//   entry: "./src/main.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "styles.css",
//     }),
//   ],
//   optimization: {
//     minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "dist"),
//     compress: true,
//     port: 9000,
//     open: true,
//     watchContentBase: true,
//   },
//   watch: true,
// };

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production", // Ви можете змінити на 'development' для режиму розробки
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Використовуйте 'static' замість 'contentBase'
    compress: true,
    port: 9000,
    open: true,
    watchFiles: ["src/**/*"], // Використовуйте 'watchFiles' замість 'watchContentBase'
  },
  watch: true,
};
