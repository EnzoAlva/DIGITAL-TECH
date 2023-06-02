const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
  } );
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const SpritesmithPlugin = require('webpack-spritesmith');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
let fileBan = process.env.npm_lifecycle_event.replace('start:', '');
fileBan = fileBan.replace('build:', '');
fileBan = fileBan.replace('builddev:', '');
fileBan = fileBan.replace('builddev:', '');
const carpeta_core_business = process.env.npm_config_directory;
const compileSprite = false;
const FILENAME = process.env.npm_config_project;
const fullPath = process.env.npm_config_fullpath;
if (!carpeta_core_business || !FILENAME) {
    console.log(
        "PLEASE SET --directory=my-directory --project=my-project VARS"
    );
    process.exit();
}

let pages = [`${FILENAME}`];
let oEmtry = pages.reduce(function (result, name, index, array) {
    result[name] = ['@babel/polyfill', path.resolve(__dirname, `./src/js/pages/${carpeta_core_business}/${name}/index.js`)];
    return result;
}, {})

const makeSprite = (corebussines_project, version, date_path) => new SpritesmithPlugin({
    src: {
        cwd: path.resolve(__dirname, `src/assets/img/${corebussines_project}/sprite`),
        glob: '*.png'
    },
    target: {
        image: path.resolve(__dirname, `src/assets/img/${date_path}/spritev${version}.png`),
        css: path.resolve(__dirname, `src/scss/pages/${corebussines_project}/sprite.scss`)
    },
    apiOptions: {
        cssImageRef: `~spritev${version}.png`
    },
    spritesmithOptions: {
        padding: 20
    },
    retina: "@2x"
});

let aPlugins = [
    new webpack.DefinePlugin( {
        "process.env": dotenv.parsed
      } ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order,
    }),

    //*AGREGAR LOS HTML A COMPILAR*//

    new HtmlWebpackPlugin({
        template: `./src/pug/pages/${carpeta_core_business}/${FILENAME}/index.pug`,
        hash: true,
        filename: `${FILENAME}.html`,
        chunks: [`${FILENAME}`],
        inject: process.env.NODE_ENV === 'production' ? false : true,
        minify: {
            collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
        }
    }),
    
    // new HtmlWebpackPlugin({
    //     template: `./src/pug/pages/${carpeta_core_business}/${FILENAME}/prueba.pug`,
    //     hash: true,
    //     filename: `prueba.html`,
    //     chunks: [`prueba`],
    //     inject: process.env.NODE_ENV === 'production' ? false : true,
    //     minify: {
    //         collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
    //     }
    // }),

    //*-----------------------------------------*//

    new SpriteLoaderPlugin({
        plainSprite: true,
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new WebpackMd5Hash(),
];
if (compileSprite === true) {
    console.log("Compilando sprites..................................................");
    aPlugins = [
        new webpack.DefinePlugin( {
            "process.env": dotenv.parsed
          } ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order,
        }),
        new HtmlWebpackPlugin({
            template: `./src/pug/pages/${carpeta_core_business}/${FILENAME}/index.pug`,
            hash: true,
            filename: `${FILENAME}.html`,
            chunks: [`${FILENAME}`],
            inject: process.env.NODE_ENV === 'production' ? false : true,
            minify: {
                collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
            }
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/assets/sprite'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/assets/img/2022/04/spritev1.52.png'),
                css: path.resolve(__dirname, 'src/scss/base/sprite.scss')
            },
            apiOptions: {
                cssImageRef: "~spritev1.52.png"
            },
            spritesmithOptions: {
                padding: 20
            },
            retina: "@2x"
        }),

        makeSprite('empresas/ficha_internet', '1.3', '2021/08'),
        makeSprite('empresas/servicios_multicloud', '3000.0', '2020/11'),
        makeSprite('personas/home', '-home.2.2', '2021/09'),
        new SpriteLoaderPlugin({
            plainSprite: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new WebpackMd5Hash(),
    ];    
}


module.exports = {
    entry: oEmtry,
    output: {
        filename: `js/${FILENAME}.js`,
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: aPlugins,
    resolve: {
        modules: ["node_modules", "assets/img/2020/11", "assets/img/2021/01", "assets/img/2021/09", "assets/img/2021/07", "assets/img/2021/02", "assets/img/2021/12", "assets/img/2022/03", "assets/img/2022/04"]
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            use: 'style-loader'
        },
        {test: /\.html$/, use: ['html-loader']},
        {
            test: /\.(sa|sc|c)ss$/i,
            use: MiniCssExtractPlugin.loader,
        },
        {
            test: /\.(sa|sc|c)ss$/i,
            use: {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/i,
            exclude: [/plugin/],
            use: {
                loader: "postcss-loader",
                options: {
                    sourceMap: true
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/i,
            use: {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    implementation: require("sass"),
                    sassOptions: {
                        fiber: false,
                    },
                }
            }
        },
        {
            test: /\.(mp4)$/,
            include: path.resolve(__dirname, 'src/assets/media'),
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'media',
            },
        },
        {
            test: /\.svg$/,
            include: path.resolve(__dirname, 'src/assets/svg'),
            use: [{
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: "img/sprite.svg"
                }
            }]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            include: path.resolve(__dirname, 'src/fonts'),
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                },
            }],
        },
        {
            test: /\.pug$/,
            use: [{
                loader: 'html-loader-srcset',
                options: {
                    interpolate: true,
                    attrs: ['img:src', ':srcset', 'img:data-src', ':data-srcset', ':data-lazy', ':data-poster', 'source:data-src'],
                }
            },
            {
                loader: 'pug-html-loader',
                options: {
                    pretty: true,
                }
            }
            ]
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        },
        {
            type: 'javascript/auto',
            test: /\.json$/,
            include: /(lottie)/,
            loader: 'lottie-web-webpack-loader',
            options: {
                assets: {
                    scale: 0.5 // proportional resizing multiplier
                }
            }
        }
        ],
    },
};
