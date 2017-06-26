var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackDelPlugin = require('webpack-del-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT_DIR = path.resolve(__dirname);
const BUILD_DIR = path.join(ROOT_DIR, 'build');



var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
})

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/main.js')
    ],
    vendor: ['pixi', 'p2', 'phaser']

  },
  output: {
    path: path.resolve(__dirname, 'build/dist/'),
    publicPath: './build',
    filename: 'bundle.min.js'
  },
  plugins: [
    new WebpackDelPlugin({ match: path.join(BUILD_DIR, '*') }),
    definePlugin,
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      minimize: true,
      output: {
        comments: false
      }
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './assets'),
      to: path.resolve(__dirname, './build/assets')
    }, {
      from: path.resolve(__dirname, './index.html'),
      to: path.resolve(__dirname, './build')
    },{
      from: path.resolve(__dirname, './vendor'),
      to: path.resolve(__dirname, './build/dist/')
    }]),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' /* chunkName= */, filename: 'vendor.min.js' /* filename= */ }),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader'
      },
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
}
