const _create = require('./create')
const _delete = require('./delete')
const _update = require('./update')
const _list = require('./list')

module.exports = {
  create: _create,
  delete: _delete,
  update: _update,
  list: _list
}
