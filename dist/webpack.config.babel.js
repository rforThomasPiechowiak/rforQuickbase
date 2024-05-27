'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var include = (0, _path.join)(__dirname, 'src');

exports.default = {
    entry: './src/index',
    output: {
        path: (0, _path.join)(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'rforquickbase'
    },
    devtool: 'source-map',
    module: {
        loaders: [{ test: /\.js$/, loader: 'babel', include: include }, { test: /\.js$/, loader: 'json', include: include }]
    }
};