const Todo = require('../models/Todo')

class TodoController {
  static findAll(req, res) {
    Todo.find()
      .populate('author', ['_id', 'username', 'email'])
      .then(todos => {
        res.status(200).json({
          message: 'list all todo-list',
          todos: todos
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // find specific todo-list
  static findUserTodo(req, res) {
    console.log(req.params.id, 'ini ctrl')
    Todo.find({
      author: req.params.id
    })
      .then(userTodo => {
        res.status(200).json({
          message : 'your todo-list',
          task : userTodo
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // create todo-list
  static create(req, res) {
    let todo = new Todo({
      author: req.decoded.id,
      todos: req.body.todos
    })

    todo.save()
      .then(createTodo => {
        console.log(createTodo)
        res.status(200).json({
          message: 'success create new todo',
          todo: createTodo
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // update what todo
  static update(req, res) {
    Todo.findOne({
      _id: req.params.id,
      author: req.decoded.id
    })
      .then(todo => {
        todo.title = req.body.title || todo.title
        todo.todos = req.body.todos || todo.todos

        todo.save()
          .then(updatedTodo => {
            res.status(200).json({
              message: 'todo updated!',
              todo: updatedTodo
            })
          })
          .catch(err =>{
            console.log(err)
            res.status(500).send(err)
          })
      })
      .catch( err =>{
        console.log(err)
        res.status(500).send(err)
      })
  }

  // delete todo-list
  static delete(req, res) {
    Todo.remove({
      _id: req.params.id,
      author: req.decoded.id
    })
      .then(() => {
        res.status(200).json({
          message: 'success delete todo-list',
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // middleware on
  // mark rodo to change status
  static mark(req, res) {
    Todo.findOne({
      _id: req.params.id,
      author: req.decoded.id
    })
      .then(todo => {
        todo.status = req.body.status || todo.status,

        todo.save()
          .then(mark => {
            res.status(200).json({
              message: 'Success mark',
              todo: mark
            })
          })
          .catch(err => {
            console.log(err)
            res.status(500).send(err)
          })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
}

module.exports = TodoController