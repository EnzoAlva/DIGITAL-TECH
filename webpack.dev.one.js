const merge = require('webpack-merge');
const common = require('./webpack.common.one.js');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const path = require("path");
const fullPath = process.env.npm_config_fullpath;


module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true
    },
    plugins: [
    ],
    module: {
		rules: [
			// Images: Copy image files to build folder
			{
                test: /\.(png|svg|jpg|gif|webp)$/,
                include: path.resolve(__dirname, 'src/assets/img'),
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img'
                },
            },
		],
	},
});