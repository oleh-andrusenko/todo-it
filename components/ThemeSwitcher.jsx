import React, { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { motion } from "framer-motion"
function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  return (
    <button
      className='w-12 h-6 border-slate-200 rounded-full border-2  transition-all dark:border-blue-700 flex items-center'
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
      <motion.div
        className={`w-6 h-6 p-1  md:w-5 md:h-5  shadow-lg rounded-full grid place-content-center  transition-all duration-300 ${
          theme === "light" ? "mr-6 md:mr-6 bg-white" : "ml-6 md:ml-6 bg-blue-700"
        }`}
      >
        {theme === "light" && <FaMoon className='text-sm text-amber-300' />}
        {theme === "dark" && <FaSun className='text-sm text-amber-300' />}
      </motion.div>
    </button>
  )
}

export default ThemeSwitcher
