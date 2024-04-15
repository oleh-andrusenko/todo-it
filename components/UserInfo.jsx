import React from "react"
import { signOut } from "next-auth/react"
import { HiOutlineLogout } from "react-icons/hi"
import { HiMiniUserCircle } from "react-icons/hi2"

function UserInfo({ user }) {
  return (
    <div className='flex items-center gap-1'>
      <HiMiniUserCircle className='w-10 h-10 text-blue-700' />

      <div>
        <p className='text-sm font-semibold dark:text-white'>{`${user?.name && user.name}`}</p>
        <p className='text-[10px] text-slate-700 dark:text-slate-200'>
          {user?.email && user.email}
        </p>
      </div>
      <a onClick={() => signOut()} className='hover:cursor-pointer ml-3'>
        <HiOutlineLogout className='w-6 h-6 text-blue-700' />
      </a>
    </div>
  )
}

export default UserInfo
