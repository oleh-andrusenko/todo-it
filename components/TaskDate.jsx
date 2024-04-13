import React from "react"
import { FaC, FaClock } from "react-icons/fa6"

function TaskDate({ dueDate }) {
  const today = new Date()
  const ifTaskToday = dueDate === today.toISOString().slice(0, 10)
  const daysRemaining = Math.floor(
    (new Date(dueDate) - today) / (24 * 3600 * 1000) + 1
  )

  return (
    <p
      className={`${
        ifTaskToday ? "bg-blue-700 text-white " : "text-blue-700 "
      } text-sm flex items-center gap-4 p-2 text-center rounded-lg absolute bottom-2 left-2 `}
    >
      {ifTaskToday ? "Today" : null}
      {!ifTaskToday && daysRemaining > 0 && (
        <>
          {dueDate}
          <FaClock /> {daysRemaining + " day(s)"}
        </>
      )}
      {daysRemaining < 0 && (
        <>
          <span className='text-red-600'>{dueDate}</span>
          <FaClock className='text-red-600 size-4' />{" "}
          <span className='text-red-600'>
            {daysRemaining * -1 + " day(s) ago"}
          </span>
        </>
      )}
    </p>
  )
}

export default TaskDate
