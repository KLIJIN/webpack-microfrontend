import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 5000,
    open: true,
    static: './dist',
    historyApiFallback: true,
    hot: true, // HOT MODULE REPLASEMENT
  }
}