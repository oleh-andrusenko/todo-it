import React from "react"
import { FaFire } from "react-icons/fa"
function PriorityPicker({ priority, setPriority }) {
  return (
    <div className='w-full border-2 border-slate-500 relative rounded-lg h-10 p-2 mb-4'>
      <label
        htmlFor='priority'
        className='font-semibold absolute -top-4 left-2 bg-white dark:bg-slate-950 px-1'
      >
        Priority
      </label>
      <div
        className={`${
          priority === 1
            ? "text-red-500"
            : priority === 2
            ? "text-amber-600"
            : "text-green-600"
        } text-center text-2xl font-semibold flex`}
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
  )
}

export default PriorityPicker
