/*global __dirname process */
const NODE_ENV = process.env.NODE_ENV  || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        home: './home',
        about: './about'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(svg|eot|ttf|woff|png|jpg|gif)/,
            loader: 'file?name=[name].[ext]'
        }]
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })

    ]
};
