import React from 'react'
import Link from 'next/link'
// import { ModeToggle } from '@/components/ModeToggle'
const Navbar = () => {

    return (
        <div className=' md:px-10 px-2 flex flex-wrap  items-center justify-between  py-5'>
            <div className='flex items-center gap-10'>

                <Link href={'/'} className='font-brittany  '>
                    <span className="text-[36px]  md:text-[50px] dark:before:hover:text-white relative before:absolute before:top-[85%] before:left-[85%] before:font-sans before:text-lg before:font-[400] before:text-gray-400 font-bold before:content-['Insights']  ">Umair</span>
                </Link>

            </div>
            <div className='flex flex-wrap gap-3'>
                <div className='relative md:block hidden'>
                    <input type="text" className='p-2   bg-gray-100 dark:bg-slate-600 px-6 rounded-3xl' placeholder='Search' name="" id="" />
                    <img className='absolute right-2 top-1 bg-gray-100 dark:bg-slate-600 ' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffd502/search.png" alt="search"/>
                </div>
                {/* <ModeToggle /> */}
            </div>
        </div>
    )
}

