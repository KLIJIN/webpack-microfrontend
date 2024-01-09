import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";



export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        // "style-loader",
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: isDev ? "[name]__[local]" : '[hash:base64:5]',
            },
          },
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      /** ts-loader умеет работать с TS
       * Если бы не было TS нужен был бы babel-loader
       */
      exclude: /node_modules/,  // исключения, куда webpack не должен смотреть
      test: /\.tsx?$/, // <-- это регулярное выражение
      use: [
        {
          loader: 'ts-loader',
          // options: {
          //отключает проверку типов при компиляции, чуть ускоряет сборку
          //   transpileOnly: true 
          // }
        }
      ], // название используемого лоадера
    },
    // {
    //   test: /\.m?tsx?$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: "babel-loader",
    //   }
    // },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true
          }
        }
      ],
    },
  ]
}