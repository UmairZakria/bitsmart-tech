'use client'
import React, { useState } from 'react'
import TagInput from '../components/Taginput'
import axios from 'axios'

const Page = () => {
  const [imgs, setImgs] = useState([]);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  const [name, setName] = useState('')
  const [discription, setDiscription] = useState('')
  const [sourcelink, setSourcelink] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault();
    window.scroll(0, 0)
    setError('Adding...')
    axios.post('/api/project', { name, discription, sourcelink, imgs, category })
      .then((res) => {
        console.log(res)

        if (res) {
          setError('Project Added Successfully!')
          setTimeout(() => {
            setError('')
            setName('')
            setDiscription('')
            setSourcelink('')
          }, 5000);

        }
      })
      .catch((err) => { console.log(err) })





  }

  return (
    <>
      <div className='w-full h-auto pb-10   '>
        <h1 className='text-4xl mx-auto w-full md:w-1/2 text-center py-10'>Add Project Details</h1>
        <form onSubmit={handlesubmit} className="w-full md:w-1/2 p h-auto flex flex-col  p-5  gap-4  mx-auto border dark:border-gray-500">
          {error && <p className='text-red-500 text-lg'>{error}</p>}

          <label htmlFor="">Project Name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className='border dark:border-gray-500 focus:outline-none rounded-md  p-1  px-4' name="" id="" />
          <label htmlFor="">Source Link*</label>
          <input type="text" value={sourcelink} onChange={(e) => setSourcelink(e.target.value)} className='border dark:border-gray-500 focus:outline-none rounded-md p-1  px-4' name="" id="" />

          <label htmlFor="">Project Discription*</label>
          <textarea name="" value={discription}  onChange={(e) => setDiscription(e.target.value)} className='border dark:border-gray-500 focus:outline-none rounded-md  p-1  px-4 h-32 ' id=""></textarea>


          <label htmlFor="">Images Link</label>
          <p className='text-green-400 text-sm'>Note: At Least one Image is Link is requried</p>


          <TagInput
            initialTags={[]}
            onTagsChange={(updatedTags) => setImgs(updatedTags)}
            placehold="Enter Image Links and hit 'Enter' or ',' " 

          />
          <label htmlFor="">Add Categorys</label>
          <p className='text-gray-500 text-sm'>e.g.. Web design, Web App, SEO</p>
          <TagInput
            initialTags={[]}
            onTagsChange={(updatedTags) => setCategory(updatedTags)}
            placehold="Enter Category and hit 'Enter' or ','  "
          />
          <input type="submit" value={'Submit'} className=' shadow-sm bg-blues text-white border border-black cursor-pointer rounded-xl py-3  ' />

        </form>
      </div>
    </>
  )
}

export default Page
