const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  dir: './build'
})
const handle = app.getRequestHandler()
const paths = require('./paths')

app.prepare()
.then(() => {
  const server = express()
  server.use('/static', express.static(paths.inRootDir('static')))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

