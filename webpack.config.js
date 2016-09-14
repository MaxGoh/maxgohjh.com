const webpack = require('webpack'),
	path = require('path');


module.exports = {
	entry: {
		main: ['./assets/main.js', './assets/style.js'],
	},
	output: {
		path: './assets/bundle/',
		filename: '[name].bundle.js'
	},
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  }
};
