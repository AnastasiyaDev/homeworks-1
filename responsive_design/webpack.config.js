/*global __dirname process */
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    context: __dirname + '/src/modules',
    entry: {
        main: './main',
        common: './common'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: '[name]'
    },

    resolve: {
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!autoprefixer!less'
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

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })

    ]
};
