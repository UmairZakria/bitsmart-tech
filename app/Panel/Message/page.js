'use client';
import React , {useEffect,useState} from 'react'
import axios from 'axios';
import { format } from 'date-fns';


const Page = () => {
    const [data,setData] =useState([])
    const [profile, setProfile] = useState('')


    // const handeldata()
    useEffect(() => {
        axios.get('/api/contact')
        .then((res)=>{
            setData(res.data.data)

        })
        .catch((err)=>{console.log(err)})

    }, [profile])
    
    const handeldelete = (id) =>{
        axios.delete(`/api/contact?id=${id}`)
        .then((res) =>{console.log(res)
          if (res.data.status === 'success'){
            setProfile('Message Deleted Successfully!')
            setTimeout(() => {
              setProfile('')
            }, 2000);
          }else {
            setProfile('Message not found')
          }
    
    
        })
        .catch((err)=> {console.log(err)})
      }
      
  return (
    <div className='space-y-8 container mx-auto'>
                <label htmlFor="" className="text-xl text-red-600">{profile}</label>

        {
            data.map((data)=>(
                <div key={data._id} className='border relative rounded-lg shadow-lg p-2 px-4 flex gap-4' >
                <button onClick={()=>handeldelete(data._id)}  className='w-[36px] h-[36px] absolute top-6 right-4'>

                    <img className='w-[36px] h-[36px] absolute top-6 right-4' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-dustbin-smart-home-flatart-icons-lineal-color-flatarticons.png" alt="" />
                </button>
                <div className='flex flex-col   justify-center gap-4 '>
                    <div className="flex gap-1 flex-col -center">

                        <h1 className='text-2xl '>{data.fname?data.fname:'unknown'}</h1>{format(new Date(data.date), 'MMM dd yyyy')} & {format(new Date(data.date), "hh:mm:ss a")}
                        <p className='space-x-2 '><span className='font-semitbold text-xl'>Subject: </span>{data.subject? data.subject :'Unknown'}   <span className='font-semitbold text-xl'>Email:</span> {data.email?data.email:'Unknown'}  <span className='font-semitbold text-xl'>Phone:</span> {data.phone?data.phone:'Unknown'} </p>

                    </div>
                    <div className='text-sm dark:text-gray-500 '>
                        {data.message}
                    </div>
                </div>
            </div>
            ))
        }

      
    </div>
  )
}

export default Page
