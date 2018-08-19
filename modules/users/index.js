const express = require('express')
const router = express.Router()
const actions = require('./actions')

/* GET ALL Users */
router.get('/users', actions.list)

/* GET One User */
router.get('/user/:id', actions.list)

/* NEW User */
router.post('/user', actions.create)

/* UPDATE One User */
router.put('/user/:id', actions.update)

/* DELETE One User */
router.delete('/user/:id', actions.delete)

module.exports = router
