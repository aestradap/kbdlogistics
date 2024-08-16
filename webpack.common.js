const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: [
    "./src/front/js/index.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/, use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }]
      }, //css only files
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
          loader: "file-loader",
          options: { name: "[name].[ext]" }
        }
      }, //for images
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "media/"
          }
        }
      }, // for video and audio files
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: ["file-loader"]
      }//for fonts
    ]
  },
  resolve: {
    extensions: ["*", ".js"],
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "onlytruck.png",
      template: "template.html"
    }),
    new Dotenv({ safe: true, systemvars: true })
  ]
};