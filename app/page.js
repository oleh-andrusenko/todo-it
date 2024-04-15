import Dashboard from "../components/Dashboard"
export const metadata = {
  icons: {
    icon: '/logo.svg', // /public path
  },
}
export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  )
}
