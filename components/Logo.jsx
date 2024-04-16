import Link from "next/link"
import { FaCheckSquare } from "react-icons/fa"

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-1 w-1/3'>
      <FaCheckSquare className='bx bx-check-double text-2xl md:text-4xl text-blue-600' />
      <span className='text-2xl font-bold dark:text-white'>
        ToDo<span className='text-blue-700'>.it</span>
      </span>
    </Link>
  )
}

export default Logo
