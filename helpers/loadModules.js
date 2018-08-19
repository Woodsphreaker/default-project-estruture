
const fs = require('fs')
const path = require('path')
const modules = fs.readdirSync(path.join(__dirname, '../modules'))

// APP Config

const createRoute = app => {
  for (const mod of modules) {
    const loadModule = require(`../modules/${mod}`)
    app.use(`/${mod}`, loadModule)
  }
}

module.exports = createRoute
