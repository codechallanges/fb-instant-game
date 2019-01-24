'use strict'
var chalk = require('chalk')
var {
   dev
}= require('../env')

module.exports= function(config){
    console.log('environment: '+ chalk.blue('development'))
    config.entry= dev.entry
    config.output= {
        path: dev.bundle_path,
        filename: dev.outputName
    }
    config.mode= dev.label 
    config.devServer= {
        contentBase: dev.devServerContent ,
        port: 4000,
        historyApiFallback: true,
        publicPath: '/build/'
    }
} 