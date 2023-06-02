const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const SpritesmithPlugin = require("webpack-spritesmith");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  entry: {
    semi_nuevos: ['@babel/polyfill', './src/js/pages/personas/equipos-semi-nuevos/index.js'],
    apphuawei: ['@babel/polyfill', './src/js/pages/personas/apphuawei/index.js'],
    home_personas: ['@babel/polyfill', './src/js/pages/personas/home/index.js'],
    entelpro: ['@babel/polyfill', './src/js/pages/personas/entelpro/index.js'],
    recarga_digitales: ['@babel/polyfill', './src/js/pages/personas/recarga-digitales/index.js'],
    campania_ripley: ['@babel/polyfill', './src/js/pages/personas/campania_ripley/index.js'],
    campania_dinners_bbva: ['@babel/polyfill', './src/js/pages/personas/campania_dinners_bbva/index.js'],
    apple_trade: ['@babel/polyfill', './src/js/pages/personas/apple-trade/index.js'],
    prepago_section_canales_example: ['@babel/polyfill', './src/js/pages/personas/prepago_section_canales_example/index.js'],
    fibra_optica: ['@babel/polyfill', './src/js/pages/empresas/fibra_optica/index.js'],
    // buen_pagador_hogar: ['@babel/polyfill', './src/js/pages/personas/buen_pagador_hogar/index.js'],
    formas_lugares_pago: ['@babel/polyfill', './src/js/pages/personas/formas_lugares_pago/index.js'],
    navidad_accesorios: ['@babel/polyfill', './src/js/pages/personas/navidad-accesorios/index.js'],
    //error_503: ['@babel/polyfill', './src/js/pages/personas/error_503/index.js'],
    //cobertura_hogar: ['@babel/polyfill', './src/js/pages/personas/cobertura_hogar/index.js'],
    // app_empresas: ['@babel/polyfill', './src/js/pages/empresas/app_empresas/index.js'],
    //pago_recibos: ['@babel/polyfill', './src/js/pages/empresas/pago_recibos/index.js'],
    //vas_inicio: ['@babel/polyfill', './src/js/pages/proyectos/vas/inicio/index.js'],
    //vas_login: ['@babel/polyfill', './src/js/pages/proyectos/vas/nuevo_usuario/index.js'],
    //vas_campana: ['@babel/polyfill', './src/js/pages/proyectos/vas/nueva_campana/index.js'],
    //poweroso: ['@babel/polyfill', './src/js/pages/proyectos/poweroso/index.js'],
    //por_que_entel: ['@babel/polyfill', './src/js/pages/empresas/por_que_entel/index.js'],
    //vas_inicio: ['@babel/polyfill', './src/js/pages/proyectos/vas/inicio/index.js'],
    //soluciones_digitales__g_suite: ['@babel/polyfill', './src/js/pages/empresas/soluciones_digitales__g_suite/index.js'],
    //campana_bolsas_y_recargas: ['@babel/polyfill', './src/js/pages/empresas/campana_bolsas_y_recargas/index.js'],
    //catalogo_internet: ['@babel/polyfill', './src/js/pages/empresas/catalogo_internet/index.js'],
    //landing_renovacion: ['@babel/polyfill', './src/js/pages/empresas/landing_renovacion/index.js'],
    //home_empresas: ['@babel/polyfill', './src/js/pages/empresas/home/index.js'],
    //catalogo_equipos_empresas: ['@babel/polyfill', './src/js/pages/empresas/catalogo_equipos/index.js'],
    //ficha_planes_empresas: ['@babel/polyfill', './src/js/pages/empresas/ficha_planes/index.js'],
    //campana_r30: ['@babel/polyfill', './src/js/pages/personas/campana-r30-cvm/index.js'],
    // personas_doble_megas: ['@babel/polyfill', './src/js/pages/personas/doble-megas/index.js'],
    // personas_netflix: ['@babel/polyfill', './src/js/pages/personas/netflix/index.js'],
    // ficha_backup_cloud_empresas: [
    // cloud_academy: ['@babel/polyfill', './src/js/pages/proyectos/cloud-academy/index.js'],
    // personas_doble_megas: ['@babel/polyfill', './src/js/pages/personas/doble-megas/index.js'],
    // ficha_backup_cloud_empresas: [
    //   "@babel/polyfill",
    //   "./src/js/pages/empresas/ficha_backup_cloud/index.js",
    // ],
    // nuevas_marcas: [
    //   "@babel/polyfill",
    //   "./src/js/pages/personas/nuevas-marcas/index.js",
    // ],
  //   reestructuracion_promociones: ['@babel/polyfill', './src/js/pages/personas/reestructuracion-promociones/index.js'],
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order,
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/personas/recarga_digitales/index.pug',
      hash: true,
      filename: 'recarga_digitales.html',
      chunks: ['recarga_digitales'],
      inject: process.env.NODE_ENV === 'production' ? false : true,
      minify: {
          collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
      }
  }),
  new HtmlWebpackPlugin({
    template: './src/pug/pages/personas/equipos-semi-nuevos/index.pug',
    hash: true,
    filename: 'equipos-semi-nuevos.html',
    chunks: ['semi_nuevos'],
    inject: process.env.NODE_ENV === 'production' ? false : true,
    minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    }
}),
  new HtmlWebpackPlugin({
    template: './src/pug/pages/personas/campania_ripley/index.pug',
    hash: true,
    filename: 'campania_ripley.html',
    chunks: ['campania_ripley'],
    inject: process.env.NODE_ENV === 'production' ? false : true,
    minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    }
  }),  
  new HtmlWebpackPlugin({
    template: './src/pug/pages/empresas/fibra_optica/index.pug',
    hash: true,
    filename: 'fibra_optica.html',
    chunks: ['fibra_optica'],
    inject: process.env.NODE_ENV === 'production' ? false : true,
    minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    }
  }),  
  new HtmlWebpackPlugin({
    template: './src/pug/pages/personas/campania_dinners_bbva/index.pug',
    hash: true,
    filename: 'campania_dinners_bbva.html',
    chunks: ['campania_dinners_bbva'],
    inject: process.env.NODE_ENV === 'production' ? false : true,
    minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    }
  }),
  new HtmlWebpackPlugin({
      template: './src/pug/pages/personas/apple_trade/index.pug',
      hash: true,
      filename: 'apple_trade.html',
      chunks: ['apple_trade'],
      inject: process.env.NODE_ENV === 'production' ? false : true,
      minify: {
          collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
      }
  }),
  new HtmlWebpackPlugin({
    template: './src/pug/pages/personas/prepago_section_canales_example/index.pug',
    hash: true,
    filename: 'prepago_section_canales_example.html',
    chunks: ['prepago_section_canales_example'],
    inject: process.env.NODE_ENV === 'production' ? false : true,
    minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    }
}),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/personas/apphuawei/index.pug',
      hash: true,
      filename: 'apphuawei.html',
      chunks: ['apphuawei'],
      inject: process.env.NODE_ENV === 'production' ? false : true,
      minify: {
          collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
      }
  }),
  new HtmlWebpackPlugin({
    template: './src/pug/pages/personas/formas_lugares_pago/index.pug',
    hash: true,
    filename: 'formas_lugares_pago.html',
    chunks: ['formas_lugares_pago'],
    inject: process.env.NODE_ENV === 'production' ? false : true,
    minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    }
}),
//   new HtmlWebpackPlugin({
//     template: './src/pug/pages/personas/reestructuracion-promociones/index.pug',
//     hash: true,
//     filename: 'reestructuracion-promociones.html',
//     chunks: ['reestructuracion_promociones'],
//     inject: process.env.NODE_ENV === 'production' ? false : true,
//     minify: {
//         collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
//     }
// }),
    new HtmlWebpackPlugin({
      template: "./src/pug/pages/personas/buen_pagador_hogar/index.pug",
      hash: true,
      filename: "buen_pagador_hogar.html",
      chunks: ["buen_pagador_hogar"],
      inject: process.env.NODE_ENV === "production" ? false : true,
      minify: {
        collapseWhitespace:
          process.env.NODE_ENV === "production" ? true : false,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/pages/personas/home/index.pug",
      hash: true,
      filename: "home.html",
      chunks: ["home_personas"],
      inject: process.env.NODE_ENV === "production" ? false : true,
      minify: {
        collapseWhitespace:
          process.env.NODE_ENV === "production" ? true : false,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/pages/personas/entelpro/index.pug",
      hash: true,
      filename: "entelpro.html",
      chunks: ["entelpro"],
      inject: process.env.NODE_ENV === "production" ? false : true,
      minify: {
        collapseWhitespace:
          process.env.NODE_ENV === "production" ? true : false,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/pages/personas/navidad-accesorios/index.pug",
      hash: true,
      filename: "navidad-accesorios.html",
      chunks: ["navidad-accesorios"],
      inject: process.env.NODE_ENV === "production" ? false : true,
      minify: {
        collapseWhitespace:
          process.env.NODE_ENV === "production" ? true : false,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/pages/personas/canales-contacto/index.pug",
      hash: true,
      filename: "canales-contacto.html",
      chunks: ["canales_contacto"],
      inject: process.env.NODE_ENV === "production" ? false : true,
      minify: {
        collapseWhitespace:
          process.env.NODE_ENV === "production" ? true : false,
      },
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, "src/assets/sprite"),
        glob: "*.png",
      },
      target: {
        image: path.resolve(
          __dirname,
          "src/assets/img/2020/09/spritev1.17.png"
        ),
        css: path.resolve(__dirname, "src/scss/base/sprite.scss"),
      },
      apiOptions: {
        cssImageRef: "~spritev1.17.png",
      },
      spritesmithOptions: {
        padding: 20,
      },
      retina: "@2x",
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new WebpackMd5Hash(),
  ],
  resolve: {
    modules: ["node_modules", "assets/img/2020/09"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: "style-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: MiniCssExtractPlugin.loader,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: [/plugin/],
        use: {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            implementation: require("sass"),
            sassOptions: {
              fiber: false,
            },
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        include: path.resolve(__dirname, "src/assets/img"),
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          //outputPath: process.env.NODE_ENV === 'production' ? '/wp-content/uploads/2020/08/' : 'img',
          //outputPath: 'img',
          outputPath: (url, resourcePath, context) => {
            // To get relative path you can use
            const relativePath = path.relative(context, resourcePath);
            const folders = path.dirname(relativePath).split(path.sep);
            const folderYear = folders[folders.length - 1];
            const folderMonth = folders[folders.length - 2];
            if (process.env.NODE_ENV === "production") {
              return `/wp-content/uploads/${folderMonth}/${folderYear}/${url}`;
            } else {
              return `/wp-content/uploads/${folderMonth}/${folderYear}/${url}`;
            }
          },
        },
      },
      {
        test: /\.(mp4)$/,
        include: path.resolve(__dirname, "src/assets/media"),
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "media",
        },
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "src/assets/svg"),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              spriteFilename: "img/sprite.svg",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: path.resolve(__dirname, "src/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader-srcset",
            options: {
              interpolate: true,
              attrs: [
                "img:src",
                ":srcset",
                "img:data-src",
                ":data-srcset",
                ":data-lazy",
                ":data-poster",
                "source:data-src",
              ],
            },
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "jQuery",
          },
          {
            loader: "expose-loader",
            options: "$",
          },
        ],
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        include: /(lottie)/,
        loader: "lottie-web-webpack-loader",
        options: {
          assets: {
            scale: 0.5, // proportional resizing multiplier
          },
        },
      },
    ],
  },
};
