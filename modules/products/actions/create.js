const _create = (req, res, next) => {
  const data = [
    {
      module: 'product',
      action: 'create one product'
    }
  ]

  res.send(data)
}
module.exports = _create
