import mongoose, { Schema } from "mongoose"

\

const taskSchema = new Schema(
  {
    user: { type: String, required: true },
    title: String,
    description: String,
    dueDate: String,
    priority: Number,
    isDone: { type: Boolean, default: false },
    isFavourite: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema)
export default Task
