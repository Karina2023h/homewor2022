// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

// module.exports = {
//   entry: "./src/main.js", // Ваш основний JS файл
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
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//       filename: "index.html",
//     }),
//     new MiniCssExtractPlugin({
//       filename: "styles.css",
//     }),
//   ],
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
// };

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Замінений плагін

module.exports = {
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
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(), // Включення мініфікації CSS
    ],
  },
};
