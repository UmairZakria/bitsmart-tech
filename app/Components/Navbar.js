"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/image.png";
import { motion } from "framer-motion";
import { MoveRight, EllipsisVertical, AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
const Navbar = () => {
  const [display, setDisplay] = useState("none");
  const handelnav = () => {
    if (display == "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div className="w-full  py-8 px-2 md:px-10">
      <div className="  glass-effect relative rounded-xl shadow-lg h-[90px] px-7   flex items-center justify-between ">
        <Link href={"/"} className=" ">
          <Image
            src={logo}
            className="size-[60%] md:size-[35%] lg:size-[55%]"
            alt="logo"
          />
        </Link>
        <nav className="md:flex hidden text-gray-500 dark:text-gray-300 absolute left-1/2 -translate-x-[50%]  text-sm text-center md:gap-4 lg:gap-8 ">
          <Link
            className=" font-medium hover:text-prime hover:border-b-[1px] border-prime  transition-all ease-in-out duration-300"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className=" font-medium hover:text-prime hover:border-b-[1px] border-prime  transition-all ease-in-out duration-300"
            href={"/Aboutus"}
          >
            About
          </Link>
          <Link
            className=" font-medium hover:text-prime hover:border-b-[1px]  border-prime transition-all ease-in-out duration-300"
            href={"/#review"}
          >
            Review
          </Link>
          <Link
            className=" font-medium hover:text-prime hover:border-b-[1px] border-prime  transition-all ease-in-out duration-300"
            href={"/#projects"}
          >
            Projects
          </Link>
          <Link
            className=" font-medium hover:text-prime hover:border-b-[1px]  border-prime transition-all ease-in-out duration-300"
            href={"/Contactus"}
          >
            Contactus
          </Link>
        </nav>
        {/* <button className='bg-[#bcf45f] rounded-lg transition-all ease-in-out duration-500  hover:bg-soft-gradient hover:shadow-md  hover:text-[#34b8f7] font-medium md:px-4 lg:px-6 p-2 hidden md:flex gap-2 items-center '>Got a Qoute <MoveRight size={18} /></button> */}
        <div className="md:block hidden">
          {/* <ModeToggle className="" /> */}
          <button className="px-6  hidden md:flex group shadow-md  transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer   hard-glass-effect   items-center justify-around gap-3 rounded-full  py-2 ">
            Let's Talk
            <MoveRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
          </button>
        </div>
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          style={{ display: display }}
          className="md:hidden  flex flex-col absolute  justify-evenly items-center   rounded-xl top-[100%] bg-soft-gradient w-full left-1/2 -translate-x-[50%]  text-lg gap-6 py-4 "
        >
          <motion.div
            initial={{ x: 200 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: {
                delay: 0.129,
                duration: 0.2,
              },
            }}
          >
            <Link
              className="text-gray-700  dark:text-gray-300  dark:hover:text-blues  py-2  font-medium hover:text-prime hover:border-b-[1px] border-prime  transition-all ease-in-out duration-300"
              href={"/"}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: {
                delay: 0.145,
                duration: 0.2,
              },
            }}
          >
            <Link
              className="text-gray-700  dark:text-gray-300  dark:hover:text-blues   py-2 font-medium hover:text-prime hover:border-b-[1px] border-prime  transition-all ease-in-out duration-300"
              href={"Aboutus"}
            >
              About
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: {
                delay: 0.169,
                duration: 0.2,
              },
            }}
          >
            <Link
              className="text-gray-700  dark:text-gray-300  dark:hover:text-blues   py-2 font-medium hover:text-prime hover:border-b-[1px]  border-prime transition-all ease-in-out duration-300"
              href={"/#review"}
            >
              Review
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: {
                delay: 0.185,
                duration: 0.2,
              },
            }}
          >
            <Link
              className="text-gray-700  dark:text-gray-300  dark:hover:text-blues  py-2  font-medium hover:text-prime hover:border-b-[1px] border-prime  transition-all ease-in-out duration-300"
              href={"/#projects"}
            >
              Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: {
                delay: 0.21,
                duration: 0.2,
              },
            }}
          >
            <Link
              className="text-gray-700  dark:text-gray-300  dark:hover:text-blues  py-2  font-medium hover:text-prime hover:border-b-[1px]  border-prime transition-all ease-in-out duration-300"
              href={"/Contactus"}
            >
              Contactus
            </Link>
          </motion.div>

          {/* <ModeToggle className="" /> */}
        </motion.nav>
        <button onClick={handelnav} className="md:hidden active:animate-spin ">
          {display == "none" ? <AlignJustify /> : <X />}{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
