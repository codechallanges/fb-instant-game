var webpack = require('webpack')
var uglifyPlugin = require('uglifyjs-webpack-plugin')
var loaders = require('./loaders')
var {resolveApp} = require('./utils')

var config = {
    entry: resolveApp('index.js'),
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
    plugins: [new webpack.ProgressPlugin(),new webpack.ProvidePlugin({
        noUiSlider: 'nouislider'
    })]
}

switch (process.env.NODE_ENV) {
    case 'dev':
        require('./env/dev')(config)
        break;
    case 'prod':
        require('./env/prod')(config)
    default:
        break;
}


module.exports = config