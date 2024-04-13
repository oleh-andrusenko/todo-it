import Link from "next/link"

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-1'>
      <i className='bx bx-check-double text-4xl text-blue-600'></i>
      <span className='text-2xl font-bold'>
        ToDo<span className='text-blue-700'>.it</span>
      </span>
    </Link>
  )
}

export default Logo
