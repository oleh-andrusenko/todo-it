
import Link from "next/link"
import TasksList from "./TasksList"
import { Suspense } from "react"
import { getServerSession } from "next-auth"
import { authConfig } from "@/configs/auth"
import { FaPlus } from "react-icons/fa6"

const getTasks = async (currentUser) => {
  "use server"
  try {
    const res = await fetch(
      `http://localhost:3000/api/Tasks?email=${currentUser}`,
      {
        cache: "no-store",
      }
    )
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

async function Dashboard() {
  const session = await getServerSession(authConfig)
  const { tasks } = await getTasks(session?.user?.email)
  return (
    <div className='flex flex-col p-2 md:p-4'>
      <div className='flex  md:flex-row justify-between items-center mb-6'>
        <h1 className='sm:text-sm md:text-2xl lg:text-3xl font-bold'>
          Welcome back, {session?.user?.name.split(" ")[0]}!
        </h1>
        <Link
          href='/add-task'
          className='p-2 md:px-4 md:py-1 bg-blue-200 rounded-full md:rounded-xl text-blue-700 font-semibold flex text-center items-center hover:bg-blue-700 hover:text-white transition-all'
        >
          <FaPlus className="w-5 h-5 md:w-4 md:h-4 md:mr-3"/> <span className='hidden md:inline'>New task</span>
        </Link>
      </div>

      <div className='p-1  flex flex-col items-center'>
        <Suspense fallback={<p>Fetching tasks...</p>}>
          <TasksList tasks={tasks} />
        </Suspense>
      </div>
    </div>
  )
}

export default Dashboard
