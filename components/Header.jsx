"use client"
import Link from "next/link"
import Logo from "./Logo"
import UserInfo from "./UserInfo"
import { useSession } from "next-auth/react"
function Header() {
  const session = useSession()
  console.log(session)
  return (
    <header className='h-16  flex items-center  justify-between shadow-lg sticky top-0 z-10'>
      <Logo />

      {session.status === "authenticated" && (
        <UserInfo user={session?.data?.user} />
      )}
    </header>
  )
}

export default Header
