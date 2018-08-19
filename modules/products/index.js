const express = require('express')
const router = express.Router()
const actions = require('./actions')

/* GET ALL Products */
router.get('/', actions.list)

/* GET One Product */
router.get('/product/:id', actions.list)

/* NEW Product */
router.post('/product', actions.create)

/* UPDATE One product */
router.put('/product/:id', actions.update)

/* DELETE One product */
router.delete('/product/:id', actions.delete)

module.exports = router
