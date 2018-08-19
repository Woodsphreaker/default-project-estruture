const _update = (req, res, next) => {
  const {id} = req.params
  const data = [
    {
      module: 'books',
      action: `update one book with id ${id}`
    }
  ]

  res.send(data)
}

module.exports = _update
