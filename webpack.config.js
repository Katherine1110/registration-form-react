// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   entry: {
//     main: path.resolve(__dirname, './src/index.js'),
//   },
//   output: {
//     path: path.resolve(__dirname, './docs'),
//     filename: '[name].bundle.js',
//   },
//   mode: 'development',
//   devServer: {
//     historyApiFallback: true,
//     static: path.resolve(__dirname, './docs'),
//     open: true,
//     compress: true,
//     hot: true,
//     port: 8080,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'webpack Boilerplate',
//       template: path.resolve(__dirname, './public/index.html'), // шаблон
//       filename: 'index.html', // название выходного файла
//     }),
//     new CleanWebpackPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//   ],
//   module: {
//     rules: [
//       // JavaScript
//       {
//         test: /\.js(x?)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       // изображения
//       {
//         test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//         type: 'asset/resource',
//       },
//       // шрифты и SVG
//       {
//         test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//         type: 'asset/inline',
//       },
//       // CSS, PostCSS, Sass
//       {
//         test: /\.(scss|css)$/,
//         use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
//       },
//       // HTML
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//             options: { minimize: true },
//           },
//           {
//             loader: 'posthtml-loader',
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.jsx', '.js'],
//     modules: [path.join(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
//   },
// };
