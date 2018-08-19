const _create = (req, res, next) => {
  const data = [
    {
      module: 'books',
      action: 'create one book'
    }
  ]

  res.send(data)
}
module.exports = _create
