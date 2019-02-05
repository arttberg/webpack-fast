const path = require('path');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	},
	plugins: [
	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development,
	      // ./public directory is being served
	      host: 'localhost',
	      port: 8086,
	      files: ['./dist/*.html'],
	      server: { baseDir: ['dist'] }
	    })
  	],
	devServer: {
		overlay: true
	}
}