'use strict'
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var chalk = require('chalk')
var {
    prod
} = require('./env')

module.exports = function (config) {
    console.log('environment: ' + chalk.green('production'))
    config.entry = '../src/components/lib'
    config.output = {
        path: prod.bundle_path,
        filename: prod.outputName
    }
    config.output.path = prod.bundle_path
    config.mode = prod.label
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