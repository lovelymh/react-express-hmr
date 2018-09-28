var webpack = require('webpack');

module.exports = {

    entry: [
        './src/index.js',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server'
    ],

    output: {
        path: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: { //express서버로 돌림
            "*": "http://localhost:3000"
        }
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack','babel-loader'],
                exclude: /node_modules/,
            }
        ]
    }
};
