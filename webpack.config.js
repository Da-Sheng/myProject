const merge = require("webpack-merge");
const argv = require("yargs-parser")(process.argv.slice(2));
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = argv.mode === "production";
const envConfig = require(`./config/webpack.${argv.mode || "development"}.js`);

const baseConfig = {
  mode: argv.mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 }, // 这个配置表示在css-loader处理@import引入的css之前，需要先经过前面1个loader的处理(即MiniCssExtractPlugin.loader)
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isProd
        ? "styles/[name].[contenthash:8].css"
        : "styles/[name].css",
      chunkFilename: isProd
        ? "styles/[name].[contenthash:8].css"
        : "styles/[name].css",
      // ignoreOrder: false 表示是否忽略CSS文件的引入顺序
      // 设置为false时，如果CSS文件的引入顺序对样式有影响，webpack会发出警告
      // 这有助于发现潜在的CSS优先级问题
      ignoreOrder: false,
    }),
  ],
};

module.exports = merge.default(baseConfig, envConfig);
