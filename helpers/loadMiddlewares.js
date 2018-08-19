
module.exports = (app) => {
  const logRoutes = (req, res, next) => {
    next()
  }

  app.use(logRoutes)
}
