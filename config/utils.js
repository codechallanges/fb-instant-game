var fs= require('fs')
var path= require('path')

const APP_DIR = fs.realpathSync(process.cwd())
const APP_ROOT= ''

const resolveApp = relativePath => relativePath ? 
                                                        path.resolve(APP_DIR,relativePath): path.resolve(APP_DIR, APP_ROOT)

module.exports= {resolveApp}