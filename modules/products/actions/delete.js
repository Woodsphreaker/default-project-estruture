const _delete = (req, res, next) => {
  const {id} = req.params
  const data = [
    {
      module: 'product',
      action: `delete one product with id ${id}`
    }
  ]

  res.send(data)
}

module.exports = _delete
