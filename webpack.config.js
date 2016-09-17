webpack = require('webpack'),
path = require('path');

module.exports = {
	entry: "./assets/main.js",
	output: {
		path: './public/js/',
		filename: '[name].bundle.js'
	},
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
			{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loaders: [
							'file?hash=sha512&digest=hex&name=[hash].[ext]',
							'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
					]
			}
    ]
  }
};
