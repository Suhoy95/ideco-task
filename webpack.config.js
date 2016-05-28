
const NODE_ENV = process.env.NODE_ENV || 'dev';

var path = require('path');
var webpack = require('webpack');
 
module.exports = {
    entry: './public/js/main.jsx',

    output: { 
        path: path.join(__dirname, 'public'), 
        filename: 'build.js' 
    },

    watch: NODE_ENV === 'dev',

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: { presets: ['es2015', 'react'] }
        }]
    }
};