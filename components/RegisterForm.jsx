"use client"

import dog from "../assets/dog.svg"
import { notify } from "@/libs/notify"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

function RegisterForm() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user = {
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
    }

    const res = await fetch("api/Users/register", {
      method: "POST",
      body: JSON.stringify({ user: user }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      notify(1, "User created successfully!")
      router.push("/login")
    } else notify(2, "Something went wrong!")
  }
  return (
    <div
      className={`w-full md:w-[600px] px-4 py-10 md:p-6 flex flex-col items-center`}
    >
      <div className='text-center'>
        <h2 className='font-bold text-3xl'>
          Welcome to ToDo<span className='text-blue-700'>.it</span>
        </h2>
        <p className='text-slate-600 mt-1 mb-4 md:mb-0'>
          Create your account to use our app.
        </p>
      </div>

      <div className='w-screen px-4  md:p-4 md:mt-4 md:w-full '>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-rows-2 gap-5'>
            <div className='grid grid-rows-1 grid-cols-4 input-field'>
              <input
                type='email'
                name='email'
                
                className='p-1  border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
            </div>
            <div className='grid grid-rows-1 grid-cols-4 input-field'>
              <input
                type='name'
                name='name'
                className='p-1  border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='name' className='font-semibold'>
                Full name
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
            <div className='grid grid-rows-1 grid-cols-4 input-field'>
              <input
                type='password'
                name='passwordConfirm'
                className='p-1  border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='passwordConfirm' className='font-semibold '>
                Confirm password
              </label>
            </div>
          </div>

          <div className='w-full flex items-center gap-4 justify-end mt-6'>
            <Link
              href='/login'
              className='text-sm text-slate-700 underline hover:text-slate-900 transition-all'
            >
              Already have account? Sign in
            </Link>
            <button className='p-3 md:p-2 bg-blue-700 text-white rounded-lg border-2 border-blue-700 hover:text-blue-700 hover:bg-white transition-all'>
              Create account
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-8'>
          <Image src={dog} width={256} height={256} />
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
