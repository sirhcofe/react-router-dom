const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "auto",
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.ts|\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/App.tsx",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      publicPath: "/mfe1/",
    }),
  ],
};
