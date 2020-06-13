const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: { presets: ['@babel/preset-env'] },
			},
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
		],
	},
	devServer: {
		open: true,
		// hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new VueLoaderPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
	],
};
