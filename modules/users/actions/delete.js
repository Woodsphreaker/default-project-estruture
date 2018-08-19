const _delete = (req, res, next) => {
  const {id} = req.params
  const data = [
    {
      module: 'user',
      action: `delete one user with id ${id}`
    }
  ]

  res.send(data)
}

module.exports = _delete
