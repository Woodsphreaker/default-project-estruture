const _delete = (req, res, next) => {
  const {id} = req.params
  const data = [
    {
      module: 'books',
      action: `delete one book with id ${id}`
    }
  ]

  res.send(data)
}

module.exports = _delete
