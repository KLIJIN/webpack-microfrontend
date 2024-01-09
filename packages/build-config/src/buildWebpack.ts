import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlagins } from "./buildPlagins";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types";


export function buildWebpack(options: BuildOptions): webpack.Configuration {

  return {
    mode: options.mode ?? 'development', // если env.mode существует, то его иначе правый оператор
    entry: {
      // helloWorld: './src/index.tsx',
      helloWorld: options.path.entry,
    },
    output: {
      filename: '[name].[contenthash].js',
      // path: path.resolve(__dirname, 'dist'),
      path: options.path.output,
      clean: true,
    },
    plugins: buildPlagins(options),
    resolve: buildResolve(options),
    devServer: buildDevServer(options),
    module: {
      rules: buildLoaders(options),
    },
    devtool: 'inline-source-map'
  }
}