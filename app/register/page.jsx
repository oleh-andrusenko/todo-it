import RegisterForm from "@/components/RegisterForm"
import React from "react"

export const metadata = {
  icons: {
    icon: "/logo.svg", 
  },
}
function RegisterPage() {
  return (
    <div className='w-full h-full grid place-content-center'>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
