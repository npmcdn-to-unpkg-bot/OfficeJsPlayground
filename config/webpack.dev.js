var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: helpers.root('dist'),
        publicPath: 'https://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        sourceMapFilename: '[name].map'
    },

    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'src'
    },

    plugins: [
         new webpack.SourceMapDevToolPlugin({
             filename: '[file].map',
             exclude: [
                 'vendor.js',
                 'polyfills.js'
             ]
         }),
        new ExtractTextPlugin('[name].css')    
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: helpers.root('dist')
    }
});
