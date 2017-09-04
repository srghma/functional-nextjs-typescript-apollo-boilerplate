const path = require('path')

const rootPath = path.resolve(__dirname, '..')
const dotNextPath = path.resolve(rootPath, '.next')

const inRootDir = pathToFile => path.join(rootPath, pathToFile)
const inDotNextDir = pathToFile => path.join(dotNextPath, pathToFile)

module.exports = {
  rootPath,
  dotNextPath,
  inRootDir,
  inDotNextDir,
}
