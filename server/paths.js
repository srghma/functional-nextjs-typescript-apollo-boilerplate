const path = require('path')

const inDir = someDir => pathToFile => path.join(someDir, pathToFile)

const rootDir    = path.resolve(__dirname, '..')
const dotNextDir = path.resolve(rootDir, 'build/.next')
const appDir     = path.resolve(rootDir, 'app')
const buildDir   = path.resolve(rootDir, 'build')

module.exports = {
  rootDir,
  inRootDir: inDir(rootDir),

  dotNextDir,
  inDotNextDir: inDir(dotNextDir),

  appDir,
  inAppDir: inDir(appDir),

  buildDir,
  inBuildDir: inDir(buildDir),
}
