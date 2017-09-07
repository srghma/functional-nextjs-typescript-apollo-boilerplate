const path = require('path')

const rootPath = path.resolve(__dirname, '..')
const inRootDir = pathToFile => path.join(rootPath, pathToFile)

const dotNextPath = path.resolve(rootPath, '.next')
const inDotNextDir = pathToFile => path.join(dotNextPath, pathToFile)

const appPath = path.resolve(rootPath, 'app')

const buildPath = path.resolve(rootPath, 'build')

module.exports = {
  rootPath,
  inRootDir,

  dotNextPath,
  inDotNextDir,

  appPath,

  buildPath,
}
