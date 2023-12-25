import mongoose from 'mongoose';

const subTodo = new mongoose.Schema({
  content:{
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

},{timestamps: true}
),

export const subTodos = mongoose.model('subTodo', subTodo);
