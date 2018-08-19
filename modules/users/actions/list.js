const list = (req, res, next) => {
  const {id} = req.params

  const action = id ? `list one user with id ${id}` : `list all users`

  const data = [
    {
      module: 'user',
      action: action
    }
  ]

  res.send(data)
}

module.exports = list
