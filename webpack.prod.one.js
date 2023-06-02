const path = require('path');

let fileBan = process.env.npm_lifecycle_event.replace('start:', '');
fileBan = fileBan.replace('build:', '');
fileBan = fileBan.replace('builddev:', '');
const carpeta_core_business = fileBan;
const FILENAME = process.env.npm_config_project;

const merge = require('webpack-merge');
const common = require('./webpack.common.one.js');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPngquant = require('imagemin-pngquant');

const fullPath = process.env.npm_config_fullpath;
const unegocio = process.env.npm_config_directory;
const no_base64 = process.env.no_base64 || (unegocio==="empresas")?false: true;

const oImagenSinComprimido =  {
    test: /\.(png|svg|jpg|gif|webp)$/,
    include: path.resolve(__dirname, 'src/assets/img'),
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        outputPath: (url, resourcePath, context) => {       
            const relativePath = path.relative(context, resourcePath);
            const folders = path.dirname(relativePath).split(path.sep)
            const folderYear = folders[folders.length - 1]
            const folderMonth = folders[folders.length - 2]
            if (process.env.NODE_ENV === 'production') {
                return `/wp-content/uploads/${folderMonth}/${folderYear}/${url}`;
            } else {
                return `${folderMonth}/${folderYear}/${url}`;
            }
        },
    },
};

const oImagenComprimido =  {
    test: /\.(png|jpe?g|webp|git|svg|)$/i,
    include: path.resolve(__dirname, "src/assets/img"),
    use: [{
            loader: 'img-optimize-loader',
            options: {
                name: "[name].[ext]",
                publicPath: (url, resourcePath, context) => {
                    const relativePath = path.relative(context, resourcePath);
                    const folders = path.dirname(relativePath).split(path.sep)
                    const folderYear = folders[folders.length - 1]
                    const folderMonth = folders[folders.length - 2]
                    if (process.env.NODE_ENV === 'production' &&  fullPath) {
                        return `https://www.entel.pe/wp-content/uploads/${folderMonth}/${folderYear}/${url}`;
                    }
                    if (process.env.NODE_ENV === 'production') {
                        return `/wp-content/uploads/${folderMonth}/${folderYear}/${url}`;
                    }
                    return `/${folderMonth}/${folderYear}/${url}`;
                },
                outputPath: (url, resourcePath, context) => {
                    // To get relative path you can use
                    const relativePath = path.relative(context, resourcePath);
                    const folders = path.dirname(relativePath).split(path.sep)
                    const folderYear = folders[folders.length - 1]
                    const folderMonth = folders[folders.length - 2]
                    if (process.env.NODE_ENV === 'production') {
                        return `/wp-content/uploads/${folderMonth}/${folderYear}/${url}`;
                    } else {
                        return `${folderMonth}/${folderYear}/${url}`;
                    }
                },
                compress: {
                    // This will take more time and get smaller images.
                    mode: 'low', // 'lossless', 'low', high
                    disableOnDevelopment: true,
                },
            },
        }
    ],
};
let oImagenMod = oImagenComprimido;
console.log("****************",no_base64);
if(no_base64 == true || no_base64 == "true") {
    console.log("****************",no_base64);
    oImagenMod = oImagenSinComprimido;
}else{
    console.log("Nooooooooooo");
}

module.exports = merge(common, {
    optimization: {
        //minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: `${FILENAME}.html`,
            dest: `${FILENAME}.html`,
            inline: true,
            minify: true,
            extract: true,
            width: 1300,
            height: 800,
            ignore: ['@font-face', /url\(/],
            penthouse: {
                blockJSRequests: false,
                timeout: 180000,
            }
        }),

        /*
        new ImageminPlugin({
            plugins: [
                ImageminPngquant({
                    quality: [0.99, 1]
                }),
                ImageminMozjpeg({
                    quality: 100
                }),
            ]
        })*/

    ],
    module: {
		rules: [
			oImagenMod
		],
	},
});