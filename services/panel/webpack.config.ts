import path from 'path';
import webpack from 'webpack';
import { buildWebpack, BuildPaths, EnvVariable } from "@packages/build-config";
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import packageJson from './package.json';


export default (env: EnvVariable) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('env Panel: ', env); // 'env'

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build',),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3333,
    mode: env.mode ?? 'production',
    path: paths,
  });

  config.plugins?.push(new webpack.container.ModuleFederationPlugin({
    name: 'panel',  // имя самого модуля
    filename: "remoteEntry.js", // название файла который будет экспортироваться в контейнер
    // экспортируемые модули
    exposes: {
      './Panel': './src/components/App.tsx'
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react'],
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom'],
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      },
    },
  }));

  return config;
};