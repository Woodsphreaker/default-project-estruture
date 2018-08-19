const list = (req, res, next) => {
  const {id} = req.params

  const action = id ? `list one book with id ${id}` : `list all books`

  const data = [
    {
      module: 'books',
      action: action
    }
  ]

  res.send(data)
}

module.exports = list
