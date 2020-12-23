const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    bundle: ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new Dotenv({
      path: './.env.local',
      defaults: './.env',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
    hot: true,
  },
};