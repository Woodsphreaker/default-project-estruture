
const fs = require('fs')
const path = require('path')
const modules = fs.readdirSync(path.join(__dirname, '../modules'))

module.exports = app => {
  for (const mod of modules) {
    const loadModule = require(`../modules/${mod}`)
    app.use(`/${mod}`, loadModule)
  }
}
