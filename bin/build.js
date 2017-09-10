const build = require('../node_modules/next/dist/server/build').default
const nextConfig = require('../next.config')

process.env.NODE_ENV !== 'production'

build('./build', nextConfig)
.catch((err) => {
  console.error(err)
  process.exit(1)
})
