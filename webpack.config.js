// ----- webpackの設定ファイル -----

module.exports = {
  // クライアントのJavaScriptが含まれるディレクトリの設定
  context: __dirname + '/app',
  // メイン(=依存関係の起点)となるJavaScriptファイルの指定 (※ファイル名の'.js'は省略してもよい)
  entry: './entry',
  // まとめられたJavaScriptの出力先となるディレクトリ&JavaScriptファイル名
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};