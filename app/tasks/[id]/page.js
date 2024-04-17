import React from "react"
import TaskForm from "../../../components/TaskForm"

async function getTaskById(id) {
  const res = await fetch("http://localhost:3000/api/Tasks/" + id, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch task.")
  }
  return res.json()
}

async function TaskPage({ params }) {
  const { id } = params
  const { task } = await getTaskById(id)

  return (
    <div className='grid place-content-center'>
      <TaskForm task={task} />
    </div>
  )
}

export default TaskPage
