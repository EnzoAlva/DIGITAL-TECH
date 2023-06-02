const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminPngquant = require("imagemin-pngquant");

module.exports = merge(common, {
  //mode: 'production',
  optimization: {
    //minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    /*new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'cloud-academy.html',
      dest: 'cloud-academy.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1300,
      height: 800,
      ignore: ['@font-face',/url\(/],
      penthouse: {
          blockJSRequests: false,
          timeout: 180000,
      }
    }),*/
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, "dist"),
      src: "reestructuracion-promociones.html",
      dest: "reestructuracion-promociones.html",
      inline: true,
      minify: true,
      extract: true,
      width: 1300,
      height: 800,
      ignore: ["@font-face", /url\(/],
      penthouse: {
        blockJSRequests: false,
        timeout: 180000,
      },
    }),
    // new HtmlCriticalWebpackPlugin({
    //     base: path.resolve(__dirname, 'dist'),
    //     src: 'catalogo-equipos.html',
    //     dest: 'catalogo-equipos.html',
    //     inline: true,
    //     minify: true,
    //     extract: true,
    //     width: 375,
    //     height: 565,
    //     ignore: ['@font-face',/url\(/],
    //     penthouse: {
    //         blockJSRequests: false,
    //         timeout: 180000,
    //     }
    // }),
    /*new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'catalogo-equipos.html',
            dest: 'catalogo-equipos.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            ignore: ['@font-face',/url\(/],
            penthouse: {
                blockJSRequests: false,
                timeout: 180000,
            }
        }),/*
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'vas-bienvenida.html',
            dest: 'vas-bienvenida.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            ignore: ['@font-face',/url\(/],
            penthouse: {
                blockJSRequests: false,
                timeout: 180000,
            }
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'vas-campana.html',
            dest: 'vas-campana.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            ignore: ['@font-face',/url\(/],
            penthouse: {
                blockJSRequests: false,
                timeout: 180000,
            }
        }),*/
    new ImageminPlugin({
      plugins: [
        ImageminPngquant({
          quality: [0.99, 1],
        }),
        ImageminMozjpeg({
          quality: 100,
        }),
      ],
    }),
  ],
});
