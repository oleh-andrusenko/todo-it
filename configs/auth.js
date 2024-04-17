import Credentials from "next-auth/providers/credentials"

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await fetch("https://todo-it-eight.vercel.app/api/Users/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application-json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        if (response.ok) {
          const { user } = await response.json()
          return user
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
}
