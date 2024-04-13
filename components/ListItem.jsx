"use client"
import TaskCounter from "./TaskCounter"
import Link from "next/link"
import { usePathname } from "next/navigation"
function ListItem({ title, children, count }) {
  let linkClasses = `text-blue-700 flex items-center border-2 border-transparent justify-between mx-2 py-1 text-sm hover:cursor-pointer hover:border-b-2 hover:border-b-slate-400 hover:ml-2 hover:transition-all transition-all`
  const activeClasses = " bg-blue-700 text-white ml-4"
  const pathname = usePathname()
  return (
    <Link
      href={"/"}
      className={
        pathname === `/${title.toLowerCase()}`
          ? linkClasses + activeClasses
          : linkClasses
      }
    >
      <div className="mr-2">{children}</div>
      <p className='flex items-center text-sm'>{title}</p>
      {count !== undefined && <TaskCounter value={count} />}
    </Link>
  )
}

export default ListItem
