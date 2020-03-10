const path = require('path'); 


module.exports = {
	entry: './src/app.js', 
	output: {

		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			
	
			{
				
				test: /\.js$/,
				exclude: /node_modules/, 

				use: {
					loader: 'babel-loader', 
					options: {
						babelrc: true, 
						
					}
				}
			},
			{
				
				test: /\.s?css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.svg$/, 
				use: [
				  {
					loader: 'svg-url-loader',
					options: {
					  limit: 10000,
					},
				  },
				],
			  },
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'), 
		historyApiFallback: true 
		
	}
};
