const _update = (req, res, next) => {
  const {id} = req.params
  const data = [
    {
      module: 'product',
      action: `update one product with id ${id}`
    }
  ]

  res.send(data)
}

module.exports = _update
