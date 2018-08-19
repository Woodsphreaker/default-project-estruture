const _create = (req, res, next) => {
  const data = [
    {
      module: 'user',
      action: 'create one user'
    }
  ]

  res.send(data)
}
module.exports = _create
