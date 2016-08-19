/*global __dirname process*/
/*eslint-disable no-console*/
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src/modules',
    entry: {
        common: './common',
        main: './main'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    resolve: {
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions!less'
        }, {
            test: /\.(svg|eot|ttf|woff|png|jpg|gif)/,
            loader: 'file?name=[path][name].[ext]'
        }, {
            test: /\.php$/,
            loader: 'html?attrs[]=img:src&attrs[]=source:srcset&attrs[]=use:xlink:href!php'
        },{
            test: /\.html$/,
            loader: 'html',
            query: {
                attrs: ['img:src', 'use:xlink:href', 'source:srcset']
            }
        }]
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            cache: true
        }),
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
