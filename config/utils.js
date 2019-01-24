var fs= require('fs')
var path= require('path')

const APP_DIR = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(APP_DIR, relativePath)

module.exports= {resolveApp}