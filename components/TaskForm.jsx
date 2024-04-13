"use client"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { FaFire } from "react-icons/fa"
function TaskForm({ task }) {
  const title = useRef()
  const [priority, setPriority] = useState(1)
  const dueDate = useRef()
  const description = useRef()
  const router = useRouter()
  const session = useSession()

  const userEmail = session?.data?.user?.email

  async function handleAddTask(e) {
    e.preventDefault()
    if (!task) {
      const newTask = {
        user: userEmail,
        title: title.current.value,
        description: description.current.value,
        priority: priority,
        dueDate: dueDate.current.value,
        isDone: false,
        isFavourite: false,
      }
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ formData: newTask }),
        headers: { "Content-Type": "application/json" },
      })
      if (res.status === 201) {
        router.push("/")
        router.refresh()
      } else alert("error")
    } else {
      const updatedTask = {
        user: task.user,
        title: title.current.value,
        description: description.current.value,
        priority: priority,
        dueDate: dueDate.current.value,
        isDone: task.isDone,
        isFavourite: task.isFavourite,
      }
      const res = await fetch(`/api/Tasks/${task._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData: updatedTask }),
        headers: { "Content-Type": "application/json" },
      })
      if (res.status === 200) {
        router.push("/")
        router.refresh()
      } else console.log(res)
    }
  }
  
  return (
    <div className='py-10 px-6'>
      <p className='text-2xl font-bold mb-16'>
        {task ? "Edit the " : "Add new "}item
      </p>
      <form
        className='flex flex-col gap-4'
        method='post'
        onSubmit={handleAddTask}
      >
        <div className='grid grid-rows-1 grid-cols-4 gap-4'>
          <label htmlFor='title' className='col-span-1 font-semibold'>
            Title
          </label>
          <input
            ref={title}
            type='text'
            name='title'
            required
            defaultValue={task ? task.title : null}
            className='col-span-3 px-2 ml-2 border-[2px] border-slate-500 rounded-md focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
        </div>

        <div className='grid grid-rows-1 grid-cols-4 gap-4'>
          <label htmlFor='priority' className='col-span-1 font-semibold'>
            Priority
          </label>

          <div
            className={`flex items-center ${
              priority === 1
                ? "text-red-500"
                : priority === 2
                ? "text-amber-600"
                : "text-green-600"
            } text-center text-2xl font-semibold`}
          >
            <button onClick={() => setPriority(3)} type='button'>
              <FaFire
                className={`${priority > 3 ? "text-slate-400" : undefined}`}
              />
            </button>
            <button onClick={() => setPriority(2)} type='button'>
              <FaFire
                className={`${priority > 2 ? "text-slate-400" : undefined}`}
              />
            </button>
            <button onClick={() => setPriority(1)} type='button'>
              <FaFire
                className={`${priority > 1 ? "text-slate-400" : undefined}`}
              />
            </button>
          </div>
        </div>
        <div className='grid grid-rows-1 grid-cols-4 gap-4'>
          <label htmlFor='date' className='col-span-1 font-semibold'>
            Short description
          </label>
          <textarea
            name='date'
            className='col-span-3 h-20 p-2 border-[2px] rounded-lg focus:border-blue-700 focus:outline-none'
            ref={description}
            defaultValue={task ? task.description : null}
            required
            maxLength={64}
          />
        </div>
        <div className='grid grid-rows-1 grid-cols-4 gap-4'>
          <label htmlFor='date' className='col-span-1 font-semibold'>
            Due date
          </label>
          <input
            type='date'
            name='date'
            className='col-span-3'
            ref={dueDate}
            defaultValue={task ? task.dueDate : null}
            required
          />
        </div>

        <div className='grid grid-rows-1 grid-cols-2 gap-4 mt-10'>
          <button
            onClick={(e) => {
              e.preventDefault()
              router.push("/")
            }}
            className='px-2 py-1 border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 rounded-lg text-sm transition-all'
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            type='submit'
            className='px-2 py-1 bg-blue-700 text-white rounded-lg hover:font-semibold transition-all'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
