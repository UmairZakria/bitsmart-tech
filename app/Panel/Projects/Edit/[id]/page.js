'use client'
import React, { useState,useEffect } from 'react'
import TagInput from '@/app/Panel/components/Taginput'
import axios from 'axios'

const Page = ({ params }) => {
  let { id } = React.use(params);
  const [imgs, setImgs] = useState([]);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState([]);
  const [name, setName] = useState('')
  const [discription, setDiscription] = useState('')
  const [sourcelink, setSourcelink] = useState('')
  
  const getdata = (id) => {
    axios.get(`/api/project?id=${id}`)
        .then((res) => {
            console.log(res)
            const data = res.data.data
            setImgs(data.imgs)
            setCategory(data.category)
            setName(data.name)
            setDiscription(data.discription)
            setSourcelink(data.sourcelink)
            console.log(data.imgs)
        })
        .catch((err) => { console.log(err) })
}

useEffect(() => {

    getdata(id)

}, [id])



  const handlesubmit =  (e) => {
    setError('Updating...')
    e.preventDefault();
    window.scroll(0,0)
    axios.put('/api/project', { id, name, discription, sourcelink, imgs, category })
    .then((res)=>{
      console.log(res)
      setError('Updated.')
      setTimeout(() => {
        setError('')
      }, 5000);
    })
    .catch((err)=>{console.log(err)})



   


  }

  return (
    <>
      <div className='w-full h-auto pb-10   '>
        <h1 className='text-4xl mx-auto w-full md:w-1/2 text-center py-10'>Update Project Details</h1>
        <form onSubmit={handlesubmit} className="w-full md:w-1/2 p h-auto flex flex-col  p-5  gap-4  mx-auto border dark:border-gray-500">
        {error && <p className='text-red-500 text-lg'>{error}</p>}

          <label htmlFor="">Project Name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className='border dark:border-gray-500 focus:outline-none rounded-md  p-1  px-4' name="" id="" />
          <label htmlFor="">Source Link</label>
          <input type="text" value={sourcelink} onChange={(e) => setSourcelink(e.target.value)} className='border dark:border-gray-500 focus:outline-none rounded-md p-1  px-4' name="" id="" />

          <label htmlFor="">Project Discription</label>
          <textarea name="" value={discription}  onChange={(e) => setDiscription(e.target.value)} className='border dark:border-gray-500 focus:outline-none rounded-md  p-1  px-4 h-32 ' id=""></textarea>


          <label htmlFor="">Images Link</label>


          <TagInput
            initialTags={imgs}
            onTagsChange={(updatedTags) => setImgs(updatedTags)}
            placehold='Enter Image Link'

          />
          <label htmlFor="">Tech Used in</label>
          <TagInput
            initialTags={category}
            onTagsChange={(updatedTags) => setCategory(updatedTags)}
            placehold='Enter Skills used in From 0 index'
          />
          <input type="submit" value={'Submit'} className=' shadow-sm bg-[black] text-white border border-black cursor-pointer py-3 rounded-lg ' />

        </form>
      </div>
    </>
  )
}

export default Page
