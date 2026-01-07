const path = require('path');
const PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
  entry: {
    'echarts-gantt': path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? '[name].min.js' : '[name].js',
    library: 'EChartsGantt',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: {
    echarts: 'echarts'
  },
  devtool: 'source-map',
  mode: PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ]
  },
  plugins: []
};
