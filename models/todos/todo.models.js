import mongoose, { mongo } from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'subTodo',
      },
    ], //Array Of Sub-Todos
  },
  { timestamps: true }
);

export const todo = mongoose.model('Todo', todoSchema);
