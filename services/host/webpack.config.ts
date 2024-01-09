import path from 'path';
import webpack from 'webpack';
import { buildWebpack, BuildPaths, EnvVariable } from "@packages/build-config";
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import packageJson from './package.json';

export default (env: EnvVariable) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('env: ', env); // 'env'

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build',),
    src: path.resolve(__dirname, 'src'),
  };

  const SHOP_URL = env.SHOP_URL ?? 'http://localhost:3001';
  const ADMIN_URL = env.ADMIN_URL ?? 'http://localhost:3002';
  const PANEL_URL = env.ADMIN_URL ?? 'http://localhost:3003';

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 5000,
    mode: env.mode ?? 'production',
    path: paths,
  });


  config.plugins?.push(new webpack.container.ModuleFederationPlugin({
    name: 'host',
    filename: "remoteEntry.js",
    // подключаемые удаленные модули
    remotes: {
      shop: `shop@${SHOP_URL}/remoteEntry.js`,
      admin: `admin@${ADMIN_URL}/remoteEntry.js`,
      panel: `panel@${PANEL_URL}/remoteEntry.js`,
    },
    shared: {
      ...packageJson.dependencies,
    }
  }));


  return config;

};