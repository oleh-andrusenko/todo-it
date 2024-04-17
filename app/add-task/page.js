import TaskForm from "../../components/TaskForm"

export const metadata = {
  icons: {
    icon: "/logo.svg", 
  },
}

function AddTaskPage() {
  return (
    <div className='grid place-content-center'>
      <TaskForm />
    </div>
  )
}

export default AddTaskPage
