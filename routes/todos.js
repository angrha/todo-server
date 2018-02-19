const router = require('express').Router()
const Todo = require('../controllers/todoController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')
const isSelf  = require('../helper/authOwnOrAdm')

router.get('/', Todo.findAll)
router.get('/:id', Todo.findUserTodo)
router.post('/', Todo.create)
router.put('/:id', Todo.update)
router.delete('/:id', Todo.delete)
router.put('/:id/mark', Todo.mark)

module.exports = router