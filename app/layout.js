import "./globals.css"
import Header from "../components/Header"
import Providers from "@/components/Providers"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "ToDo.it",
  description: "Simple web app for managing tasks.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  )
}
