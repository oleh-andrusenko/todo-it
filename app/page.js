import Head from "next/head"
import Dashboard from "../components/Dashboard"

export default function Home() {
  return (
    <>
      <Head>
        <link
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
          rel='stylesheet'
        />
      </Head>
      <Dashboard />
    </>
  )
}
