/*global __dirname process*/
/*eslint-disable no-console*/
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const path = NODE_ENV === 'development' ? 'http://localhost:8090' : __dirname ;

module.exports = {
    context: __dirname + '/src/modules',
    entry: {
        common: './common',
        main: './main'
    },

    output: {
        path: __dirname + '/dist',
        // path: __dirname + '/src/modules/',
        // publicPath: 'http://localhost:8090',
        filename: '[name].js',
        library: '[name]'
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
        }]
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    devServer: {
        // contentBase: NODE_ENV === 'development' ? './src' : './dist',
        headers: {
            // Handling issue with CORS font loading
            'Access-Control-Allow-Origin': '*'
        },

        proxy: {
            '/dist*': {
                target: 'http://localhost:8090',
                secure: false,
                rewrite: function(req) {
                    console.log(req.originalUrl);
                    var wdsUrl = req.url.split('/');
                    wdsUrl.splice(0, 2, 'src', 'modules'); // dist -> src/modules
                    wdsUrl = wdsUrl.join('/');
                    req.url = wdsUrl;
                    console.log(req.originalUrl + ' -> ' + req.url);
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
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
