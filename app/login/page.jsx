import AuthForm from "../../components/AuthForm"

export const metadata = {
  icons: {
    icon: "/logo.svg", 
  },
}

function LoginPage() {
  return (
    <div className='w-full h-full grid place-content-center'>
      <AuthForm />
    </div>
  )
}

export default LoginPage
