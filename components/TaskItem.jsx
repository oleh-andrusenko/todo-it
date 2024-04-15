"use client"
import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa6"
import { IoTrash } from "react-icons/io5"
import { MdEdit } from "react-icons/md"
import TaskDate from "./TaskDate"
import TaskPriority from "./TaskPriority"
import { useRouter } from "next/navigation"
import { notify } from "@/libs/notify"
import { motion } from "framer-motion"
function TaskItem({ task }) {
  const router = useRouter()
  const deleteTask = async () => {
    const proceed = confirm("Are you sure to delete this task?")
    if (proceed) {
      try {
        const res = await fetch(`http://localhost:3000/api/Tasks/${task._id}`, {
          method: "DELETE",
        })
        if (res.ok) {
          notify(1, "Task deleted!")
          router.refresh()
        }
      } catch (error) {
        console.error(error)
        notify(2, error.toString())
      }
    }
  }
  async function toggleDone() {
    const updatedTask = {
      ...task,
      isDone: !task.isDone,
    }
    const res = await fetch(`api/Tasks/${task._id}`, {
      method: "PUT",
      body: JSON.stringify({ formData: updatedTask }),
      headers: { "Content-Type": "application/json" },
    })
    if (res.status === 200) {
      router.refresh()
    } else alert("error")
  }

  async function toggleFavourite() {
    const updatedTask = {
      ...task,
      isFavourite: !task.isFavourite,
    }
    const res = await fetch(`api/Tasks/${task._id}`, {
      method: "PUT",
      body: JSON.stringify({ formData: updatedTask }),
      headers: { "Content-Type": "application/json" },
    })
    if (res.status === 200) {
      router.refresh()
    } else alert("error")
  }

  return (
    <motion.div
      className={`min-w-[300px] h-[200px]  border-[1px] p-4 rounded-xl flex flex-col relative ${
        task.isDone ? "border-green-300 border-[2px]" : undefined
      }`}
      initial={{
        opacity: 0,
        marginTop: -15,
      }}
      animate={{
        opacity: 1,
        marginTop: 0,
      }}
      transition={{ duration: .4 }}
    >
      <div className='flex gap-2 items-center py-2'>
        <input
          type='checkbox'
          className='w-6 h-6 mr-3'
          checked={task.isDone}
          onChange={toggleDone}
        />
        <p
          className={`font-bold text-lg max-w-[16ch] min-w-[16ch] truncate ... ${
            task.isDone ? " line-through" : undefined
          }`}
        >
          {task.title}
        </p>
      </div>
      <div className=''>
        <TaskDate dueDate={task.dueDate} />
        <p className='text-sm text-slate-600 py-4 truncate ...'>
          {task.description}
        </p>
      </div>
      <button
        className=' hover:cursor-pointer hover:scale-105  text-blue-700 absolute top-2 right-2'
        onClick={toggleFavourite}
      >
        {!task.isFavourite && <CiStar className='w-8 h-8' />}
        {task.isFavourite && <FaStar className='w-8 h-8' />}
      </button>
      <TaskPriority priority={+task.priority} />
      <hr />
      <div className='absolute bottom-3 right-3 flex gap-3'>
        <button
          className=' hover:cursor-pointer hover:scale-105  text-amber-700'
          onClick={() => router.push(`tasks/${task._id}`)}
        >
          <MdEdit className='w-6 h-6' />
        </button>
        <button
          className=' hover:cursor-pointer hover:scale-105 text-red-700'
          onClick={deleteTask}
        >
          <IoTrash className='w-6 h-6' />
        </button>
      </div>
    </motion.div>
  )
}

export default TaskItem
