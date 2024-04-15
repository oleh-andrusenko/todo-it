import { AnimatePresence } from "framer-motion"
import NoTasks from "./NoTasks"
import TaskItem from "./TaskItem"

function TasksList({ tasks }) {
  return (
    <>
      <div
        className='grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-auto'
        id='tasklist'
      >
        {tasks.length > 0 &&
          tasks.map((task) => <TaskItem task={task} key={task._id} />)}
      </div>
      {tasks.length === 0 && <NoTasks />}
    </>
  )
}

export default TasksList
