const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: ''
  },
  todos: String,
  status: {
    type: String,
    enum: ['uncompleted', 'completed'],
    default: 'uncompleted'
  }
},{
  timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo