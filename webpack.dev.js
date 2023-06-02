const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");


module.exports = merge(common, {
    //mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true
    },
    plugins: [    
        /* new ImageminWebpWebpackPlugin({
            config: [{
                test: /\.(jpe?g|png)/,
                options: {
                    quality: 100
                }
            }],
        }), */
    ],
});