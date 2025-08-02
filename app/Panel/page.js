'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Page = () => {
  const [data, setData] = useState([])
  const [profile, setProfile] = useState('')
  const router = useRouter()


  const getdata = () => {
    axios.get('/api/project')
      .then((res) => {

        console.log(res)
        setData(res.data.data)
      })
      .catch((err) => { console.log(err) })


  }

  useEffect(() => {
    getdata()
  }, [profile])

  const handeldelete = (id) => {
    axios.delete(`/api/project?id=${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 'success') {
          setProfile('Project Deleted Successfully!')
          setTimeout(() => {
            setProfile('')
          }, 5000);
        } else {
          setProfile('Project not found')
        }


      })
      .catch((err) => { console.log(err) })
  }


  const handelupdate = (id) => {
      router.push(`Panel/Projects/Edit/${id}`)


  }
  return (
    <>
      <label htmlFor="" className="text-xl text-red-600">{profile}</label>

      <div
        id='move'
        className='    flex flex-wrap items-center justify-evenly   gap-10  px-5   w-full  h-auto'>
        {data.map((data, index) => (

          <div key={index} className=' shadow-lg w-[300px] p-2 gap-2 bg-slate-50 rounded-xl  flex flex-col'>
            <img src={data.imgs[0]} className='w-full object-cover h-[150px] :' alt={data.imgs[0]} />
            <h1 className='text-xl'>{data.name}</h1>
            <div className='flex flex-wrap items-center justify-between'>

              <button onClick={()=>handelupdate(data._id)} className='py-3 px-6 bg-green-600 text-white  hover:opacity-80 '>Update</button>
              <button onClick={()=>handeldelete(data._id)} className='py-3 px-6 bg-black hover:opacity-80  text-white '>Delete</button>
            </div>


          </div>
        ))}


      </div>
    </>
  )
}

export default Page