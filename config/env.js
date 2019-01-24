var {resolveApp}= require('./utils')

const PROJECT_ROOT= ''

module.exports = Object.freeze({
    dev: {
        label: 'development',
        entry: resolveApp('index.js'),
        bundle_path: resolveApp('build'),
        outputName: 'app.bundle.js',
        devServerContent: resolveApp(PROJECT_ROOT)
    },
    prod: {
        label: 'production',
        bundle_path: resolveApp('dist'),
        outputName: 'app.min.js'
    }
})