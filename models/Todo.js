const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  status: {
    type: String,
    enum: ['uncomplete', 'completed'],
    default: 'uncomplete'
  }
},{
  timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo