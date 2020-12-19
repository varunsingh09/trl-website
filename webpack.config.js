const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    //host:"",
    contentBase: path.join(__dirname),
    compress: true,
    port: 2025,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'file-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
};