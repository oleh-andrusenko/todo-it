"use client"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { notify } from "@/libs/notify"
import { useForm } from "react-hook-form"
import PriorityPicker from "./PriorityPicker"
import ValidationError from "./ValidationError"
import { FaCalendar } from "react-icons/fa";

function TaskForm({ task }) {
  const [priority, setPriority] = useState(1)
  const [date, setDate] = useState(new Date())
  const router = useRouter()
  const session = useSession()
  const userEmail = session?.data?.user?.email

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  })
  async function onAddTask(data) {
    if (!task) {
      const newTask = {
        user: userEmail,
        title: data.title,
        description: data.description,
        priority: priority,
        dueDate: data.dueDate,
        isDone: false,
        isFavourite: false,
      }
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ formData: newTask }),
        headers: { "Content-Type": "application/json" },
      })
      if (res.status === 201) {
        notify(1, "Task created!")
        router.push("/")
        router.refresh()
      } else notify(2, "Something went wrong!")
    } else {
      const updatedTask = {
        user: task.user,
        title: data.title,
        description: data.description,
        priority: priority,
        dueDate: data.dueDate,
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
    <div className='p-6 dark:text-white'>
      <p className='text-2xl font-bold mb-12 px-4 dark:text-white'>
        {task ? "Edit the " : "Add new "}item
      </p>
      <form
        onSubmit={handleSubmit(onAddTask)}
        className='w-screen px-4 md:w-[400px] flex flex-col gap-6'
      >
        <div className='input-field'>
          <input
            type='text'
            maxLength={32}
            {...register("title", {
              required: "This field is required!",
              minLength: {
                value: 2,
                message: "Min length of title is 2 characters!",
              },
              maxLength: {
                value: 32,
                message: "Max length of title is 32 characters!",
              },
            })}
            defaultValue={task ? task.title : null}
            className='w-full p-2 border-[2px] border-slate-500 rounded-md focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
          <label htmlFor='title' className='font-semibold'>
            Title
          </label>

          <ValidationError>
            {errors?.title && <p>{errors?.title?.message || "Error!"}</p>}
          </ValidationError>
        </div>

        <PriorityPicker priority={priority} setPriority={setPriority} />

        <div className='input-field mb-4'>
          <input
            type='text'
            {...register("description")}
            defaultValue={task ? task.title : null}
            className='w-full p-2 border-[2px] border-slate-500 rounded-md focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
          <label htmlFor='description' className='font-semibold'>
            Short description
          </label>
        </div>
        <div className='input-field'>
          <div className='border-2 border-slate-500 p-2 rounded-lg text-slate-900'>
            <input
              type='date'   
              defaultValue={task ? task.dueDate : ""}
              {...register("dueDate", { required: "This field is required!" })}
            />

            <label htmlFor='dueDate' className='font-semibold'>
              Due date
            </label>
          </div>
          <ValidationError>
            {errors?.dueDate && <p>{errors?.dueDate?.message || "Error!"}</p>}
          </ValidationError>
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
            type='submit'
            disabled={!isValid}
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
