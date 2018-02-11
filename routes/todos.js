const router = require('express').Router()
const Todo = require('../controllers/todoController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')
const isSelf  = require('../helper/authOwnOrAdm')

router.get('/', isLogin, isAdmin, Todo.findAll)
router.get('/:id', isLogin, isSelf, Todo.findUserTodo)
router.post('/', isLogin, Todo.create)
router.put('/:id', isLogin, isSelf, Todo.update)
router.delete('/:id', isLogin, isSelf, Todo.delete)
router.put('/:id/mark', isLogin, isSelf, Todo.mark)

module.exports = router