import Home from "@/components/Home"

export const metadata = {
  icons: {
    icon: "/logo.svg", // /public path
  },
}
export default function HomePage() {
  return (
    <div className="grid place-content-center">
      <Home />
    </div>
  )
}
