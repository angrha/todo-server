const router = require('express').Router()
const Todo = require('../controllers/todoController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')

router.get('/',isLogin, Todo.findAll)
router.get('/:id', isLogin, Todo.findUserTodo)
router.post('/', isLogin, Todo.create)
router.put('/:id', isLogin, Todo.update)
router.delete('/:id', isLogin, Todo.delete)
router.put('/:id/mark', isLogin, Todo.mark)

module.exports = router