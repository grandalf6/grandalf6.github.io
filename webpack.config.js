const path = require('path'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'main', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png||jpg|jpeg|svg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '/images',
					outputPath: 'images'
				}
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Recipes Book',
			template: 'src/main/index.html'
		})
	],

	devServer: {
		contentBase: path.resolve(__dirname, 'src', 'main'),
		historyApiFallback: true,
		port: 3000
	}
}
