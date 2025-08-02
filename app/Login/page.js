'use client'
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

import { signIn } from 'next-auth/react';

import Navbar from "../Components/Navbar";

import Link from 'next/link'
import axios from 'axios'
import Footer from '../Components/Footer';

const Page = () => {
    const ceye = 'https://img.icons8.com/?size=100&id=121529&format=png&color=1a8cd8'
    const oeye = 'https://img.icons8.com/?size=100&id=985&format=png&color=1a8cd8'
    const [email, setEmail] = useState('')
    const router = useRouter();
    const [password, setPassword] = useState()
    const [error, setError] = useState(null);
    // const navi = useNavigate()
    const [passwordeye, setPasswordeye] = useState(ceye)
    const [passwordtype, setPasswordtype] = useState("password")
    const [loadings, setLoadings] = useState({ display: 'none' })
    const handeleye = () => {
        if (passwordeye == ceye) {
            setPasswordtype('text')
            setPasswordeye(oeye)
        } else {
            setPasswordtype('password')
            setPasswordeye(ceye)
        }

    }
    const handellogin = async (e) => {
        setLoadings({ display: 'flex' })
        e.preventDefault();
        console.log(email,password)
        // const result = await signIn("credentials", {
        //   redirect: false, 
        //   email,
        //   password,
        // });
        const result = await axios.post('/api/Login', { email, password })
        if (result) {
            // console.log(result)
        }


        if (result.error) {
            setLoadings({ display: 'none' })

            console.log(result.error)

            setError('Invalid Email and Password');
            setTimeout(() => {
                setError('');

            }, 4000);
        } else {
            router.push("/Panel");
        }

    }
    return (
        <>
            <Navbar />
            <div className='  bg-center w-full h-screen px-2 md:h-[calc(100vh-130px)]  flex flex-col justify-center  items-center'>



                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: 1,
                        duration: 0.9,
                        type: "spring",
                        stiffness: 75,
                    }}
                    className='w-full  mx-4  bg-transparent border-2  dark:border  border-black dark:border-gray-500 h-auto  lg:w-1/3   md:w-1/2  2xl:w-1/3    p-1  '>



                    <div className='relative' >
                        <div style={loadings} className='absolute top-0 left-0   w-full h-full p-4 flex items-center justify-center z-50  bg-[#0000004d] dark:bg-[#ffffff49]'>


                        </div>
                        <form onSubmit={handellogin} className=' w-full gap-6 px-5 mt-2 py-6 flex flex-col'>
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            <label className='  text-center  font-medium text-2xl' >Login </label>


                            <div className='flex flex-col '>

                                <label htmlFor="Email" className=' font-medium text-sm ' >Email Address</label>
                                <input type="email" required className='pt-2  focus:outline-none px-2 border-black dark:border-white  bg-transparent border-x-0 border-t-0 border-b-2'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>


                            <div className='flex flex-col gap-1'>

                                <label className=' font-medium text-sm ' htmlFor="Password">Password</label>
                                <div className='w-full relative'>
                                    <input required type={passwordtype} className='  pt-2 px-2 w-full border-black dark:border-white  focus:outline-none bg-transparent border-b-2 border-x-0 border-t-0'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <motion.div
                                        onClick={handeleye}
                                        whileTap={{ opacity: 0 }}
                                        transition={{ duration: 0.1 }}
                                        className='p-[2px]   bg-transparent absolute rounded-t-md bottom-0     right-0  '>

                                        <img
                                            className=" object-cover  "
                                            src={passwordeye} // Path to your image
                                            alt="Description of image"

                                            width={30}

                                            height={30}
                                        // layout='responsive'
                                        />

                                    </motion.div>
                                </div>
                            </div>
                            <Link href={'/Panel'} className='underline'>Already Login?</Link>
                            <input type="submit" value={'Login Now'} className=' shadow-sm bg-soft-gradient text-prime font-medium cursor-pointer text-lg rounded-md  py-3  ' />
                        </form>
                    </div>

                </motion.div>
            </div>
            <Footer />
        </>


    )
}

export default Page
