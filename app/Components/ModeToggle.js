"use client"

import React from "react"
import { useTheme } from "next-themes"


import { motion } from "framer-motion"
import {Moon,SunMedium  } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const handelmenu = () => {

    if (theme === 'dark') {
      setTheme('light')
      
    } else if (theme === 'light') {
      setTheme('dark')

    } 

  }


  return (
    <>
      <motion.div
      whileTap={{rotate:360}}
      onClick={handelmenu} className="  p-[5px] md:p-[8px] cursor-pointer border dark:border-blues  rounded-full">
        {theme == 'dark'? <Moon className="dark:text-blues  "/> :<SunMedium />}

      </motion.div>
    </>
  )
}
