"use client"
import Logo from "./Logo"
import UserInfo from "./UserInfo"
import { useSession } from "next-auth/react"
import ThemeSwitcher from "./ThemeSwitcher"
function Header() {
  const session = useSession()
  
  return (
    <header className='h-16  flex items-center  justify-between shadow-lg sticky top-0 z-10 dark:bg-black dark:border-1 dark:border-b-[1px] dark:border-blue-700'>
      <Logo />
      <div className="flex items-center gap-4 w-2/3 justify-around ">
        <ThemeSwitcher />
        {session.status === "authenticated" && (
          <UserInfo user={session?.data?.user} />
        )}
      </div>
    </header>
  )
}

export default Header
