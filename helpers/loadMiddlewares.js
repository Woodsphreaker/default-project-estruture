const middlewares = require('../middlewares')

module.exports = app => {
  const allMiddlewares = Object.values(middlewares)
  for (const middleware of allMiddlewares) {
    app.use(middleware)
  }
}
