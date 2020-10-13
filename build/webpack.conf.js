const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OutputFilter = require('./outputFilter.js');
const getPkgEntry = require('./getPkgEntry.js');

let entry = {
  base: './src/assets/less/variables.less',
  index: './src/index.js'
};
let packages = getPkgEntry('packages').forEach(function (name) {
  entry[name] = './packages/' + name + '/index.js'
})

let isShowReport = false
try {
  let original = JSON.parse(process.env.npm_config_argv).original
  isShowReport = original.indexOf('--report') > -1
} catch (e) {}

let plugins = [
  new MiniCssExtractPlugin({
    filename: 'style/[name].css'
  }),
  new VueLoaderPlugin(),
  new OutputFilter()
]
if (isShowReport) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'PlMobile',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins
};
