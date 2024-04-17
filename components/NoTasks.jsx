import React from "react"
import addTask from "../assets/add.svg"
import Image from "next/image"
function NoTasks() {
  return (
    <div className='w-screen h-[400px] grid place-content-center text-center gap-6 '>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">No tasks here yet...</h2>
      <p className="text-lg text-slate-700 dark:text-white">It is great time to create first one 😊</p>
      <Image src={addTask} width={300} height={300} />
    </div>
  )
}

export default NoTasks
