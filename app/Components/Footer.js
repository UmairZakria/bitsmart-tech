import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/image.png'
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Twitch, Copyright } from 'lucide-react'

const Footer = () => {
    return (
        <div className='w-full min-h-[50vh] bg-secbg pt-10'>
            <div className="container  grid md:grid-cols-2 grid-cols-1 px-4 lg:px-0 md:place-items-center  mx-auto gap-6">
                <div className='space-y-4 '>
                    <Link href={'/'} className=' '>
                        <Image src={logo} className='md:size-[40%] ' alt="logo" />
                    </Link>
                    <p className='text-sm text-gray-600  dark:text-gray-400 md:w-3/4'>
                        At Bitsmart Tech, we combine creativity, technology, and strategy to deliver impactful digital experiences.

                    </p>
                    <div className='flex flex-col  text-gray-500  dark:text-gray-400 gap-2'>
                        <Link href={'#'} className='flex gap-3 hover:underline hover:text-prime text-sm'><  MapPin className='text-prime' /> 123 Innovation Drive, Tech District, Lahore</Link>
                        <Link href={'#'} className='flex gap-3 hover:underline  hover:text-prime text-sm'><  Mail className='text-prime' /> hello@bitsmarttech.com</Link>
                        <Link href={'#'} className='flex gap-3 hover:underline  hover:text-prime text-sm'><  Phone className='text-prime' /> +92-300-123-4567</Link>

                    </div>
                </div>
                <div className='flex flex-wrap gap-10 items-center justify-evenly '>

                    <div >
                        <h4 className='text-2xl  text-prime pb-2'>Company</h4>
                        <ul className='flex flex-col text-gray-500 dark:text-gray-400 gap-2 text-sm'>
                            <Link href={'/Aboutus'} className='hover:text-prime'>About Us</Link>
                            <Link href={'#'} className='hover:text-prime'>Our Team</Link>
                            <Link href={'#'} className='hover:text-prime'>Careers</Link>
                            <Link href={'#'} className='hover:text-prime'>Terms & Conditions</Link>
                            <Link href={'#'} className='hover:text-prime'>Privacy Policy</Link>
                            <Link href={'/Contactus'} className='hover:text-prime'>Contact</Link>
                            <Link href={'/Login'} className='hover:text-prime'>Client Portal</Link>



                        </ul>
                    </div>
                    <div >
                        <h4 className='text-2xl  text-prime pb-2'>Quick Links</h4>
                        <ul className='flex flex-col text-gray-500  dark:text-gray-400 gap-2 text-sm'>
                            <Link href={'/'} className='hover:text-prime'>Home</Link>
                            <Link href={'/Aboutus'} className='hover:text-prime'>About</Link>
                            <Link href={'/#projects'} className='hover:text-prime'>Our Work</Link>
                            <Link href={'#'} className='hover:text-prime'>Blog</Link>
                            <Link href={'#'} className='hover:text-prime'>Action</Link>
                            <Link href={'#'} className='hover:text-prime'>Testimonials</Link>
                            <Link href={'#'} className='hover:text-prime'>Case Studies</Link>



                        </ul>
                    </div>
                    <div >
                        <h4 className='text-2xl  text-prime pb-2'>Services</h4>
                        <ul className='flex flex-col  dark:text-gray-400 text-gray-500 gap-2 text-sm'>
                            <Link href={'#'} className='hover:text-prime'>Web Design</Link>
                            <Link href={'#'} className='hover:text-prime'>Web Development</Link>
                            <Link href={'#'} className='hover:text-prime'>Mobile Apps</Link>
                            <Link href={'#'} className='hover:text-prime'>UI/UX Design</Link>
                            <Link href={'#'} className='hover:text-prime'>E-Commerce Solutions</Link>
                            <Link href={'#'} className='hover:text-prime'>Digital Marketing</Link>
                            <Link href={'#'} className='hover:text-prime'>SEO Optimization</Link>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='py-10 space-y-3'>
                <div className='flex items-center text-sm  justify-center gap-8 text-prime opacity-50'>
                    <Link href={'#'} >
                        <Facebook />

                    </Link>
                    <Link href={'#'}>
                        <Instagram />

                    </Link>
                    <Link href={'#'}>
                        <Twitter />

                    </Link>
                    <Link href={'#'}>
                        <Linkedin />

                    </Link>
                    <Link href={'#'}>
                        <Twitch />

                    </Link>
                </div>
                <div className='flex text-gray-500  dark:text-gray-400 px-4 text-center flex-wrap items-center justify-center gap-2 '>
                    <Copyright className='text-prime' size={18} /> 2025 Bitsmart Tech - All rights reserved. |  Designed For "Keep it Simple"
                </div>

            </div>
        </div>
    )
}

export default Footer
