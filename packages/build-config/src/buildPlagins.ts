import webpack, { Configuration, DefinePlugin, } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { BuildOptions } from "./types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildPlagins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';
  return [
    // DefinePlugin создает/подменяет глобальные перменные в момент сборки
    new DefinePlugin({
      __OLOLO__: JSON.stringify('olololo-2'),
    }),
    // MiniCssExtractPlugin нужен что бы стили в css файлы импортировались, а не в тег <style>
    new MiniCssExtractPlugin({
      filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash].css",
    }),
    // плагин для создания html файлов
    new HtmlWebpackPlugin({
      template: options.path.htmlTemplate,
      filename: 'index.html',
      publicPath: '/'

    }),
    isDev && new webpack.ProgressPlugin(), // <-- показывает прогресс сборки
    // new BundleAnalyzerPlugin(),
    // new ForkTsCheckerWebpackPlugin()
  ].filter(Boolean)
};
