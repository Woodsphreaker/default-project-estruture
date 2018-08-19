const _update = (req, res, next) => {
  const {id} = req.params
  const data = [
    {
      module: 'user',
      action: `update one user with id ${id}`
    }
  ]

  res.send(data)
}

module.exports = _update
