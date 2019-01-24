var webpack = require('webpack')
var uglifyPlugin = require('uglifyjs-webpack-plugin')
var loaders = require('./loaders')
var {resolveApp} = require('./utils')

var config = {
    devtool: '#source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': resolveApp('src/components')
        }
    },
    module: {
        rules: loaders()
    },
    plugins: [new webpack.ProgressPlugin()]
}

switch (process.env.NODE_ENV) {
    case 'dev':
        require('./env_config/dev')(config)
        break;
    case 'prod':
        require('./env_config/prod')(config)
    case 'test':
        require('./env_config/test')(config)
    default:
        break;
}


module.exports = config