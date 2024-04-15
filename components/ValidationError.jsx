import React from "react"


function ValidationError({ children }) {
  return (
    <div className='h-4 text-red-500 text-sm flex items-center gap-2 my-1'>
     
      <p>{children}</p>
    </div>
  )
}

export default ValidationError
