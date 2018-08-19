const express = require('express')
const router = express.Router()
const actions = require('./actions')

/* GET ALL books */
router.get('/', actions.list)

/* GET One book */
router.get('/book/:id', actions.list)

/* NEW book */
router.post('/book', actions.create)

/* UPDATE One book */
router.put('/book/:id', actions.update)

/* DELETE One book */
router.delete('/book/:id', actions.delete)

module.exports = router
