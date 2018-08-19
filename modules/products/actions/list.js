const list = (req, res, next) => {
  const {id} = req.params

  const action = id ? `list one product with id ${id}` : `list all products`

  const data = [
    {
      module: 'product',
      action: action
    }
  ]

  res.send(data)
}

module.exports = list
