"use client"
import React , {useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Link from 'next/link'
import { MapPin, Mail, Phone,MoveRight } from 'lucide-react'
import axios from 'axios'
import SmoothScrollProvider from '../Components/SmoothScrollProvider'

const page = () => {
    const [fname, setFname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const handelsubmit = (e) => {
        e.preventDefault();
        setError('Sending...')

        axios.post('api/contact', { fname, phone, email, subject, message })
            .then((res) => {
                console.log(res)
                if (res.data.status == 'success') {
                    setError("Message Send Successfully ! You will get Response very soon.")
                    setTimeout(() => {
                        setError('')
                    }, 7000);
                }
            })
            .catch((err) => {
                console.log(err)
                setError('Server Error! , Try reloading the page.')
            })
    }
    return (
        <>
        <SmoothScrollProvider>
            <Navbar />
            <div className='w-full  py-8 px-2 md:px-10'>
                <div className='bg-soft-gradient rounded-xl gap-10 flex-col flex items-center justify-center p-10 py-16'>
                    <h1 className='text-4xl md:text-6xl font-bold text-center text-prime'>Let's Talk</h1>
                    <p className='text-lg md:text-2xl text-center lg:w-3/4 lg:mx-auto'>On our views on technology, development and latest market trends</p>
                </div>

            </div>
            <div className='container mx-auto space-y-10 px-4 md:px-0 my-16'>

                <h2 className='text-center text-4xl font-semibold'>Let's Talk</h2>
                <p className='text-center text-lg md:text-xl  md:w-3/4 mx-auto'>We've worked with clients of all sizes, from enterprise brands to funded startups. Let's talk about your project and how we can help provide value.</p>
                <div className='flex gap-6  flex-wrap-reverse justify-evenly'>
                    <div className='flex flex-col  text-gray-500 gap-6'>
                        <h3 className='text-2xl font-semibold'>Reach Us</h3>
                        <Link href={'#'} className='flex gap-3 hover:underline hover:text-prime text-xl'><  MapPin className='text-prime' /> ___ Street, Gulberg 3,Lahore</Link>
                        <Link href={'#'} className='flex gap-3 hover:underline  hover:text-prime text-xl'><  Mail className='text-prime' /> Bitsmart@Bitsmart.com</Link>
                        <Link href={'#'} className='flex gap-3 hover:underline  hover:text-prime text-xl'><  Phone className='text-prime' /> 000-111-9999</Link>

                    </div>
                    {/* <div className='w-full'> */}
                        <form onSubmit={handelsubmit} action="" className="flex  w-full  md:w-[60%] flex-col gap-6">
                            {error && <span className='text-lg text-red-600'>{error}</span>}
                            <div className="w-full flex md:flex-row flex-col gap-6">

                                <input onChange={(e)=>setFname(e.target.value)} className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg" type="text" placeholder="First Name*" />
                                <input onChange={(e)=>setEmail(e.target.value)} className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg" type="email" placeholder=" Email*" />

                            </div>
                            <div className="w-full flex md:flex-row flex-col gap-6">

                                <input required onChange={(e)=>setPhone(e.target.value)} className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg" type="tel" placeholder="Phone" />
                                <input required onChange={(e)=>setSubject(e.target.value)} className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg" type="text" placeholder=" Subject" />

                            </div>
                            <textarea required onChange={(e)=>setMessage(e.target.value)} className="w-full p-4 shadow-md rounded-lg h-[120px]" name="" placeholder="Message" id=""></textarea>
                            <button type="submit" className="place-self-center md:place-self-end mt-6  hard-glass-effect px-6 py-3 group  hover:scale-105 shadow-lg   flex gap-2 rounded-lg bg-hard-gradient text-white">
                                Send Message <MoveRight className="" size={24} />
                            </button>

                        </form>

                    {/* </div> */}

                </div>

            </div>
            <Footer />
        </SmoothScrollProvider>
        </>
    );
}

export default page;
