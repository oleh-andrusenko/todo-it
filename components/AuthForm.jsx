"use client"
import cat from "../assets/cat.svg"
import { notify } from "@/libs/notify"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
function AuthForm() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })

    if (res.ok) {
      notify(1, "Successfully logged in!")
      router.push("/")
    } else notify(2, "Something went wrong!")
  }
  return (
    <div
      className={`w-full md:w-[600px] px-4 py-10 md:p-6 flex flex-col items-center`}
    >
      <div className='text-center'>
        <h2 className='font-bold text-3xl md:text-2xl'>
          Welcome to ToDo<span className='text-blue-700'>.it</span>
        </h2>
        <p className='text-slate-600 mt-2'>
          Login into your account to see your tasks.
        </p>
      </div>

      <div className='w-screen px-4 mt-8  md:p-4 md:mt-4 md:w-full'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-rows-2 gap-5'>
            <div className='grid grid-rows-1 grid-cols-4 input-field'>
              <input
                type='email'
                name='email'
                className='p-1 border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
            </div>
            <div className='grid grid-rows-1 grid-cols-4 input-field'>
              <input
                type='password'
                name='password'
                className='p-1 border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='password' className='font-semibold'>
                Password
              </label>
            </div>
          </div>

          <div className='w-full flex items-center gap-4 justify-end mt-6'>
            <Link
              href='/register'
              className='text-sm text-slate-700 underline hover:text-slate-900 transition-all'
            >
              New user? Sign up
            </Link>
            <button className='py-1 px-6 bg-blue-700 text-white rounded-lg border-2 border-blue-700 hover:text-blue-700 hover:bg-white transition-all'>
              Sign In
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-16'>
          <Image src={cat} width={300} height={300} className='mt-20 md:mt-4' />
        </div>
      </div>
    </div>
  )
}

export default AuthForm
