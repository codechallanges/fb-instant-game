'use strict'
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var chalk = require('chalk')
var {resolveApp} = require('../utils')

module.exports = function (config) {
    console.log('environment: ' + chalk.green('production'))
    
    config.output = {
        path:  resolveApp('dist'),
        filename: 'app.min.js'
    }

    config.mode =  'production'
    config.plugins.push(new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        extractComments: true,
        uglifyOptions: {
            mangle: true,
            safari10: true,
        }
    }))
}