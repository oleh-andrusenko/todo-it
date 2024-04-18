"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { notify } from "@/libs/notify"
import cat from "../assets/cat.svg"

function AuthForm() {
  const router = useRouter()
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      
    })

    router.push("/")
    // if (res.ok) {
    //   notify(1, "Successfully logged in!")
    // } else notify(2, "Something went wrong! Check credentials and try again!")
  }

  return (
    <div className='w-full md:w-[600px] px-4 py-10 md:p-6 flex flex-col items-center '>
      <div className='text-center'>
        <h2 className='font-bold text-3xl md:text-2xl dark:text-white'>
          Welcome to ToDo<span className='text-blue-700'>.it</span>
        </h2>
        <p className='text-slate-600 mt-2 dark:text-slate-400'>
          Login into your account to see your tasks.
        </p>
      </div>

      <div className='w-screen px-4 mt-8  md:p-4 md:mt-4 md:w-full'>
        <form onSubmit={onSubmit} id='authForm'>
          <div className='grid grid-rows-2 gap-2'>
            <div className='grid grid-rows-2 grid-cols-4 gap-1 input-field'>
              <input
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Email address is not valid!",
                  },
                })}
                className='p-1 border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none dark:text-white'
              />
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              {errors?.email && (
                <p className='text-red-500 text-sm col-span-4'>
                  {errors?.email?.message || "Error!"}
                </p>
              )}
            </div>
            <div className='grid grid-rows-2 grid-cols-4 gap-1 input-field'>
              <input
                type='password'
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Min length of password is 6 characters!",
                  },
                })}
                className='p-1 border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='password' className='font-semibold'>
                Password
              </label>
              {errors?.password && (
                <p className='text-red-500 text-sm col-span-4'>
                  {errors?.password?.message || "Error!"}
                </p>
              )}
            </div>
          </div>

          <div className='w-full flex items-center gap-4 justify-end mt-6'>
            <Link
              href='/register'
              className='text-sm text-slate-700 underline hover:text-blue-700 transition-all dark:text-slate-300'
            >
              New user? Sign up
            </Link>
            <button
              disabled={!isValid}
              className='py-1 px-6 bg-blue-700 text-white rounded-lg border-2 border-blue-700 hover:text-blue-700 hover:bg-white transition-all'
            >
              Sign In
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-16'>
          <Image
            src={cat}
            alt='cat'
            width={300}
            height={300}
            className=' md:mt-4'
          />
        </div>
      </div>
    </div>
  )
}

export default AuthForm
