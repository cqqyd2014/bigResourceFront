const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const webpack=require('webpack');

module.exports = {
  mode: "development", //打包为开发模式
  entry: {

    'react_router_chunked/index':'./src/react_router_chunked/index.js',
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  plugins:[
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title:'Output Management',
      template:'./template/index.html'
    }

  ),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','stage-0','react'],
                    }
                },
                exclude: /node_modules/
            },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
};
