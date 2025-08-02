'use client'
import React, { useState, useEffect, useTransition } from 'react'
import LoadingSkeleton from '@/app/Components/LoadingSkeleton'

import axios from 'axios';
import Image from 'next/image';
// import { ModeToggle } from '@/components/ModeToggle'

import me3 from '@/public/image.png'
import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarDays, ThumbsUp, MessageSquare, Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
// import Head from 'next/head';

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";




const Main = (Props) => {
    const rout = useRouter()
    const [showConfetti, setShowConfetti] = useState(false);
    const slug = Props.slug
    const [data, setData] = useState(Props.data)
    const [isPending, startTransition] = useTransition();
    const [searchQuery, setSearchQuery] = useState('')
    const [searchdata, setSearchdata] = useState(Props.data)

    const shareUrl = `http://localhost:3000/Article/${slug}`
    const [post, setPost] = useState(Props.post)
    const [likes, setLikes] = useState(Props.post.likes)
    const [context2, setContext2] = useState('none')
    const [context4, setContext4] = useState('none')
    const [context3, setContext3] = useState(false)

    const [comments, setComments] = useState(Props.post.comments)
    const [name, setName] = useState('')
    const [discription, setDiscription] = useState('')
    const [profile, setProfile] = useState('')
    const handellikes = () => {
        setShowConfetti(true);
        let action = 'like'
        startTransition(() => {
            axios.put('/api/blogpost/', { action, slug, likes: likes + 1 })
                .then((res) => {
                    console.log(res)
                    if (res.data.status == "success") {
                        setLikes(res.data.updatedPost.likes)
                        setTimeout(() => {
                            // setShowConfetti(false);
                        }, 5000);
                    }
                })
                .catch((err) => { console.log(err) })

        })
    }
    const handelcomment = (e) => {
        e.preventDefault();
        let action = 'comment'
        axios.put('/api/blogpost/', { action, slug, name, discription })
            .then((res) => {
                if (res.data.status == "success") {
                    setProfile('Thank You For Interection')
                    setTimeout(() => {
                        setProfile('')
                    }, 2000);
                    setComments(res.data.updatedPost.comments)
                }
            })
            .catch((err) => { console.log(err) })

    }
    const handelredrict = (title) => {
        rout.push(`Article/${title}`);
    }
    useEffect(() => {
        const searchdata = data.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        if (searchQuery !== '') {
            setSearchdata(searchdata)

        } else if (searchQuery == '') {
            setSearchdata(data)
        }



    }, [searchQuery])

    const Navbar = () => {

        return (
            <div className=' md:px-10 px-2 flex flex-wrap  items-center justify-between  py-5'>
                {/* <div className=''> */}

                {/* <Link href={'/'} className=' flex-shrink-0 border w-auto'> */}
                <Image src={me3} className='size-[40%] md:size-[35%] lg:size-[15%]' alt='BitSmart Tech' />
                {/* </Link> */}

                {/* </div> */}
                <div className='flex flex-wrap  justify-evenly gap-3'>
                    <div className='relative   '>
                        {/* <button type="text" className='p-2  w-full  bg-gray-100 dark:bg-slate-600 px-6 rounded-3xl' placeholder='Search' name="" id="" /> */}
                        <Search className='absolute text-blues left-2 top-[8px]' />
                        <button onClick={() => setContext4('block')} className='p-2  w-full  bg-secbg  pr-5 pl-12 rounded-3xl' >Search</button>
                    </div>
                    {/* <ModeToggle /> */}
                </div>
            </div>
        )
    }
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: true,

                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                },
            },
        ],
        arrows: true,

    };




    return (
        <>
            <Navbar />
            <div className="container flex justify-center  py-16 mx-auto">

                <div className="mx-auto space-y-10 px-4 w-full lg:w-[750px]  ">
                    <h1 className='md:text-5xl  text-3xl  leading-10 font-bold '>{post.title}</h1>
                    <div className='my-5 flex items-center gap-6'>
                        <div className='space-y-1   '>
                            <span className='font-mono text-xl' >Bitsmart Tech <button onClick={() => setContext2('flex')} href={'/'} className='text-blues'> .Follow </button></span> <br />
                            <span className='flex items-center gap-2 '><CalendarDays className='text-blues' /> {post.date ? format(new Date(post.date), 'MMM dd yyyy') : ''}</span>

                        </div>

                    </div>
                    <div className='p-3 border-y flex flex-wrap-reverse items-center justify-between   '>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6">

                            <button onClick={handellikes} disabled={isPending} className={` ${isPending ? 'relative flex gap-1 items-center opacity-50 cursor-not-allowed ' : ' relative flex gap-1 items-center '} `} >

                                {showConfetti ? <ThumbsUp className={'active:animate-bounce text-blues fill-blues'} /> : <ThumbsUp className='text-blues' />} {likes}
                            </button>
                            <button onClick={() => setContext3(context3 ? false : true)} className='flex gap-2 items-center ' >
                                <MessageSquare className='text-blues' />
                                {comments.length}

                            </button>
                        </div>





                    </div>
                    {/* Article */}
                    <article dangerouslySetInnerHTML={{ __html: post.content }}>
                    </article>
                    {/* Article Footer */}
                    <div className='p-3 pb-7 border-b flex items-center justify-between   '>
                        <div className="flex items-center gap-6">

                            <button onClick={handellikes} disabled={isPending} className={` ${isPending ? 'flex gap-1 items-center opacity-50 cursor-not-allowed ' : 'flex gap-1 items-center '} `} >
                                <ThumbsUp className='text-blues' />

                                <span className='underline'>Give a Clap</span>
                            </button>
                            |
                            <button onClick={() => setContext3(context3 ? false : true)} className='flex gap-1 items-center ' >

                                <MessageSquare className='text-blues' />
                                <span className='underline '>Leave a comment</span>

                            </button>
                        </div>




                    </div>



                </div>
            </div>
            {/* More Article */}
            <div className="blogs container mx-auto xl:w-3/4  py-16">
                <h1 className="text-4xl my-5">Explore More:</h1>
                <Swiper navigation breakpoints={{
                    640: { slidesPerView: 1 }, 
                    768: { slidesPerView: 2 }, 
                    1024: { slidesPerView: 3 }, 
                }} modules={[Navigation]} loop className="w-full ">


                    {
                        data.map((data, index) => (
                            <SwiperSlide key={index} >

                                <div className=" px-2">

                                    <div className='border-gray-400 shadow-2xl    rounded-lg border  cursor-pointer space-y-1 pb-3 flex flex-col'>
                                        <img src={data.image} onClick={() => handelredrict(data.slug)} className='object-cover  rounded-t-lg w-full h-[200px]' alt={data.title} />

                                        <div onClick={() => handelredrict(data.slug)} className='space-y-2 px-2'>
                                            <h1 className=' md:text-3xl text-xl  lg:text-2xl line-clamp-2 font-semibold'>{data.title} </h1>
                                            <div className='flex w-full items-center justify-between  dark:text-gray-200 text-gray-800 font-normal ' >
                                                <span className='flex items-center gap-2 '><CalendarDays className='text-blues' /> {data.date ? format(new Date(data.date), 'MMM dd yyyy') : ''}</span>

                                            </div>
                                            <p className='text-sm  text-gray-800 dark:text-gray-200  line-clamp-2'>{data.discription}</p>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>




                        ))
                    }
                </Swiper>



            </div>
            {/*Subscirbe to insights*/}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ display: context2 }} className="fixed items-center justify-center  bg-[#00000048] top-0 left-0 w-full h-screen ">
                <img
                    onClick={() => setContext2('none')}
                    className="fixed top-6 z-[100] right-6 cursor-pointer"
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply-2.png"
                    alt="Close"
                />
                <div className='p-10  space-y-4  bg-black dark:bg-[#ffffff3b] backdrop-blur-lg bg-opacity-10  '>
                    <h1 className=' text-2xl font-ubuntu text-center'>Subscribe to Bitsmart Tech  <br /> Latest Article </h1>

                    <input type="email" className="w-full p-3 text-white bg-[#ffffff48] dark:placeholder:text-white placeholder:text-black dark:bg-[#00000049]  " placeholder='Enter Your Email' />
                    <button className=" w-full font-semibold text-xl p-3 rounded-3xl text-white  bg-hard-gradient " >Subscribe</button>
                </div>

            </motion.div>
            {/*Search Area  */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ display: context4 }} className="fixed  overflow-y-scroll bg-[#00000048] backdrop-blur-lg bg-opacity-10  top-0 left-0 w-full h-screen ">
                <img
                    onClick={() => setContext4('none')}
                    className="fixed md:top-6 md:size-[50px] size-[30px] z-[100] top-2 right-2 md:right-6 cursor-pointer"

                    src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply-2.png"
                    alt="Close"
                />
                <div className=' w-full  py-10 flex items-center justify-center '>
                    <motion.div initial={{ width: '20%' }} whileInView={{ width: '70%' }} transition={{ delay: 0.7, duration: 0.6 }} className='relative '>
                        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search The Article' className='px-4  w-full dark:bg-[#00000041] bg-[#ffffffd2]  placeholder:text-black dark:placeholder:text-white  rounded-3xl py-3' />
                        {/* <img className='absolute right-2 top-2   ' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffd502/search.png" alt="search" /> */}
                        <Search className=' text-blues absolute right-4 top-2 ' width="30" height="30" />

                    </motion.div>

                </div>
                <div className="container xl:w-3/4  mx-auto grid md:grid-cols-2  grid-cols-1  md:gap-8 gap-5 my-3 lg:grid-cols-3  w-full " >
                    {
                        searchdata.length > 0 ? <>
                            {

                                searchdata.slice(0, 6).map((data, index) => (
                                    <div key={index} className='border-gray-400 shadow-2xl dark:bg-[#00000041] bg-[#ffffff1c]  dark:border-gray-700   rounded-lg border md:mx-0 mx-2 cursor-pointer space-y-1 pb-3 flex flex-col'>
                                        <img src={data.image} onClick={() => handelredrict(data.slug)} className='object-cover  rounded-t-lg  h-[200px]' alt={data.title} />

                                        <div onClick={() => handelredrict(data.slug)} className='mx-4 space-y-2'>
                                            <h1 className='dark:text-[#ffffffe0] md:text-3xl text-xl  lg:text-2xl line-clamp-2 font-semibold'>{data.title} </h1>
                                            <div className='flex w-full items-center justify-between  text-gray-800 font-normal dark:text-[#ffffffe0]' >

                                                <span className='flex items-center gap-2 '><CalendarDays className='text-blues' /> {data.date ? format(new Date(data.date), 'MMM dd yyyy') : ''}</span>

                                            </div>
                                            <p className='text-sm dark:text-gray-300 text-gray-800   line-clamp-2'>{data.discription}</p>
                                        </div>


                                    </div>

                                ))

                            }
                        </>
                            : <div>Sorry We Couldn&apos;t find AnyThing</div>
                    }

                </div>

            </motion.div>
            {
                context3 ?
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.7 }}

                        className='fixed flex bottom-0 bg-black dark:bg-[#ffffff3b] backdrop-blur-lg bg-opacity-10  flex-col right-0 h-screen w-full md:w-[370px] '>
                        <div style={{ scrollbarWidth: 'none' }} className='h-auto flex-grow w-full px-4 py-15 mt-12 space-y-3 rounded-2xl overflow-y-scroll'>
                            {
                                comments ?
                                    <>
                                        {
                                            comments.map((comment, index) => (
                                                <div key={index} className='bg-[#ffffff4d] dark:bg-[#ffffff3b] py-4 px-4 rounded-md '>
                                                    <h3 className='text-lg  underline font-semibold font-ubuntu'>{comment.name}</h3>
                                                    <p className='text-[16px]  dark:text-gray-100'>{comment.discription}</p>

                                                </div>
                                            ))
                                        }
                                    </>

                                    : ''
                            }


                        </div>
                        <div >
                            <form onSubmit={handelcomment} className='space-y-2 px-5 py-2 ' >
                                {profile && <span className='text-red-500'>{profile}</span>}
                                <h4 className=' text-xl text-center  '>Write Your opinion  </h4>
                                <input required onChange={(e) => setName(e.target.value)} type="text" className="w-full p-3  rounded-md  placeholder:text-black dark:placeholder:text-white bg-[#00000025] dark:bg-[#0000003f]" placeholder='Enter Your Name' />
                                <textarea required onChange={(e) => setDiscription(e.target.value)} name="" placeholder='Enter Your Comment' id="" className="w-full p-2 rounded-md  placeholder:text-black dark:placeholder:text-white dark:bg-[#0000003f]   h-20  bg-[#00000025]" ></textarea>
                                <input value={'comment'} type="submit" className="cursor-pointer w-full font-semibold text-xl p-3 rounded-md bg-blues text-white " />
                            </form>




                        </div>

                        <X
                            onClick={() => setContext3(false)}
                            width="36"
                            height="36"
                            className="absolute top-3 z-[100] text-blues rounded-full left-3 cursor-pointer" />



                    </motion.div>
                    : ''


            }




        </>

    )
}

export default Main
