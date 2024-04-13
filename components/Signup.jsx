import React from "react"

function Signup() {
  return (
    <>
      <div className='grid grid-rows-3 grid-cols-6 gap-2'>
        <div className='row-span-1 col-span-6 grid grid-rows-1 grid-cols-4'>
          <label htmlFor='email' className='text-sm font-semibold col-span-1'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='px-2 py-1 ml-2 border-[2px] border-slate-500 rounded-md col-span-3 focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
        </div>

        <div className='row-span-1 col-span-6 grid grid-rows-1 grid-cols-4'>
          <label
            htmlFor='firstName '
            className='text-sm font-semibold col-span-1'
          >
            First name
          </label>
          <input
            type='text'
            name='firstName'
            className='px-2 py-1 ml-2 border-[2px] border-slate-500 rounded-md col-span-3 focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
        </div>
        <div className='row-span-1 col-span-6 grid grid-rows-1 grid-cols-4'>
          <label
            htmlFor='lastName'
            className='text-sm font-semibold col-span-1'
          >
            Last name
          </label>
          <input
            type='text'
            name='lastName'
            className='px-2 py-1 ml-2 border-[2px] border-slate-500 rounded-md col-span-3 focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
        </div>

        <div className='row-span-1 col-span-6 grid grid-rows-1 grid-cols-4'>
          <label
            htmlFor='password'
            className='text-sm font-semibold col-span-1'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            className='px-2 py-1 ml-2 border-[2px] border-slate-500 rounded-md col-span-3 focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
        </div>
        <div className='row-span-1 col-span-6 grid grid-rows-1 grid-cols-4'>
          <label
            htmlFor='passwordConfirm'
            className='text-sm font-semibold col-span-1'
          >
            Confirm password
          </label>
          <input
            type='password'
            name='passwordConfirm'
            className='px-2 py-1 ml-2 border-[2px] border-slate-500 rounded-md col-span-3 focus:border-[2px] focus:border-blue-700 focus:outline-none'
          />
        </div>
      </div>
    </>
  )
}

export default Signup
