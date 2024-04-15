import React from "react"
import { FaFire } from "react-icons/fa"

function TaskPriority({ priority }) {
  return (
    <div
      className={`${
        priority === 1
          ? "text-red-500"
          : priority === 2
          ? "text-amber-600"
          : "text-green-600"
      } flex text-center text-xl font-semibold my-3`}
    >
      <FaFire className={`${priority > 3 ? "text-slate-400" : undefined}`} />
      <FaFire className={`${priority > 2 ? "text-slate-400" : undefined}`} />
      <FaFire className={`${priority > 1 ? "text-slate-400" : undefined}`} />
    </div>
  )
}

export default TaskPriority
