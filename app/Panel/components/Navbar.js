import React, { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import logo from '@/public/image.png'
const Navbar = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: "/Login" });
    }
    return (
        <div className='w-full h-auto px-10  flex py-8  items-center justify-between'>
            <Link href={'/Panel'} className='text-[80px] font-brittany '>
                <Image src={logo} alt="Logo Bitsmart Tech" className='size-[60%] md:size-[35%] lg:size-[55%]' />
            </Link>
            <div

                // className=" bg-black dark:bg-[#ffffff3b]  absolute md:fixed -translate-x-1/2 left-1/2 z-[100] w-[100%]  md:w-auto top-[100%] md:top-7 md:rounded-3xl px-4 text-[15px] py-1 flex items-center justify-center gap-4 backdrop-blur-lg bg-opacity-10 "
                className='flex  items-center justify-center gap-5'

            >

                <Link
                    className='text-xl'
                    href={"/Panel/Projects"}
                >
                    Projects
                </Link>
                <Link
                    className='text-xl'
                    href={"/Panel/Message"}
                >
                    Messages
                </Link>
                <Link
                    className='text-xl'

                    href={"/Panel/Addblog"}>
                    Article
                </Link>
                <button className='bg-black px-3 py-3 border border-black  transition-all duration-500 ease-in-out hover:bg-yellow-50 text-white  hover:text-black font-semibold  h-full' onClick={handleLogout}>Logout</button>

            </div>

        </div>
    )
}

export default Navbar
