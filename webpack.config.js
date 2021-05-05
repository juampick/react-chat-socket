const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      'process.env.SOCKET_IO_SERVER': JSON.stringify(process.env.SOCKET_IO_SERVER || 'https://pager-hiring.herokuapp.com'),
      'process.env.UI_AVATARS_BASE_PATH': JSON.stringify(process.env.UI_AVATARS_BASE_PATH || 'https://ui-avatars.com/api/'),
      'process.env.GIPHY_BASE_API_PATH': JSON.stringify(process.env.GIPHY_BASE_API_PATH || 'http://api.giphy.com/v1/gifs'),
      'process.env.GIPHY_API_KEY': JSON.stringify(process.env.GIPHY_API_KEY || 'EX8oGJ1qpnzHVREdFOVtfq2cc01BqMKP'),
  }),
  ],
};