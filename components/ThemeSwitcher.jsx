import React, { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  return (
    <button
      onClick={() => {
        setTheme((prevTheme) => {
          if (prevTheme === "light") {
            document.documentElement.classList.add("dark")
            return "dark"
          } else {
            document.documentElement.classList.remove("dark")
            return "light"
          }
        })
      }}
    >
      {theme === "light" && <FaMoon className="text-xl text-amber-300"/>}
      {theme === "dark" && <FaSun className="text-xl text-amber-300"/>}
    </button>
  )
}

export default ThemeSwitcher
