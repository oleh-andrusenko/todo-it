"use client"

import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { notify } from "@/libs/notify"
import dog from "../assets/dog.svg"

function RegisterForm() {
  const router = useRouter()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
  })

  const watchPassword = watch("password")
  const onSubmit = async (data) => {
    const res = await fetch("api/Users/register", {
      method: "POST",
      body: JSON.stringify({ user: data }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    switch (res.status) {
      case 201:
        notify(1, "User created successfully!")
        return router.push("/login")
      case 300:
        return notify(2, "User already exists!")
      default:
        return notify(2, "Something went wrong!")
    }
  }

  return (
    <div className='w-full md:w-[600px] p-4 md:p-6 flex flex-col items-center '>
      <div className='text-center'>
        <h2 className='font-bold text-3xl dark:text-white'>
          Welcome to ToDo<span className='text-blue-700'>.it</span>
        </h2>
        <p className='text-slate-600 mt-1 mb-4 md:my-2 dark:text-slate-400'>
          Create your account to use our app.
        </p>
      </div>

      <div className='w-screen px-4   md:w-full '>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-rows-2'>
            <div className='grid grid-rows-2 grid-cols-4 input-field'>
              <input
                type='email'
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Email address is not valid!",
                  },
                })}
                className='p-1  border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              {errors?.email && (
                <p className='text-red-500 text-[10px]  col-span-4'>
                  {errors?.email?.message || "Error!"}
                </p>
              )}
            </div>
            <div className='grid grid-rows-2 grid-cols-4 input-field'>
              <input
                type='name'
                {...register("name", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                    message:
                      "You can use only letters in this field and dash sign.",
                  },
                })}
                className='p-1  border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='name' className='font-semibold'>
                Full name
              </label>
              {errors?.name && (
                <p className='text-red-500 text-[10px]  col-span-4'>
                  {errors?.name?.message || "Error!"}
                </p>
              )}
            </div>
            <div className='grid grid-rows-2 grid-cols-4 input-field'>
              <input
                type='password'
                {...register("password", {
                  required: "This field is required",
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
                <p className='text-red-500 text-[10px] col-span-4'>
                  {errors?.password?.message || "Error!"}
                </p>
              )}
            </div>
            <div className='grid grid-rows-2 grid-cols-4 input-field'>
              <input
                type='password'
                {...register("passwordConfirm", {
                  validate: (value) => value === watchPassword,
                })}
                className='p-1  border-[2px] border-slate-500 rounded-md col-span-4 focus:border-[2px] focus:border-blue-700 focus:outline-none'
              />
              <label htmlFor='passwordConfirm' className='font-semibold '>
                Confirm password
              </label>
              {errors?.passwordConfirm && (
                <p className='text-red-500 text-[10px]  col-span-4'>
                  {errors?.passwordConfirm?.message ||
                    "Error! Password must match!"}
                </p>
              )}
            </div>
          </div>

          <div className='w-full flex items-center gap-4 justify-end mt-6'>
            <Link
              href='/login'
              className='text-sm text-slate-700 underline hover:text-blue-700 transition-all dark:text-slate-300'
            >
              Already have account? Sign in
            </Link>
            <button
              disabled={!isValid}
              className='p-3 md:p-2 bg-blue-700 text-white rounded-lg border-2 border-blue-700 hover:text-blue-700 hover:bg-white transition-all'
            >
              Create account
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-8'>
          <Image src={dog} alt='dog' width={150} height={150} />
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
