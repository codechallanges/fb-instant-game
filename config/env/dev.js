'use strict'
var chalk = require('chalk')
var {resolveApp} = require('../utils')

module.exports= function(config){
    console.log('environment: '+ chalk.blue('development'))

    config.output= {
        path:resolveApp('build'),
        filename: 'app.bundle.js'
    }
    config.mode= 'development'
    config.devServer= {
        contentBase: resolveApp() ,
        port: 4000,
        historyApiFallback: true,
        publicPath: '/build/'
    }
} 