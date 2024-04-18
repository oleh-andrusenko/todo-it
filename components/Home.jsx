"use client"
import Image from "next/image"
import Link from "next/link"
import signin from "../assets/signin.svg"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
function Home() {
  const session = useSession()
  const router = useRouter()
  if (session.status === "loading") return <div className='loader'></div>
  if (session.status === "authenticated") return router.push("/dashboard")
  if (session.status === "unauthenticated")
    return (
      <div className='w-full p-6 md:w-[600px] h-[500px] flex flex-col justify-center items-center'>
        <div className='text-2xl font-semibold my-8 text-center dark:text-white'>
          Welcome to our <span className='text-blue-700'>app</span>! Sign in to
          continue!
        </div>
        <Image
          src={signin}
          alt=''
          width={250}
          height={250}
          className='mx-auto my-10'
        />
        <Link
          href='/login'
          className='w-48 h-10 bg-blue-700 flex justify-center items-center rounded-lg text-white hover:scale-105 transition-all'
        >
          Sign in
        </Link>
      </div>
    )
}

export default Home
