var path = require('path');

var config = {
	entry: [path.resolve(__dirname, 'src/index.jsx')],
	output: {
		path: path.resolve(__dirname, 'public/build'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loaders: ['babel']
			}
		]
	}
};

module.exports = config;