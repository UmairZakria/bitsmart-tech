'use client'
import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';


// import { useTheme } from 'next-themes';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

import LoadingSkeleton from '@/app/Components/LoadingSkeleton'


const BlogEditor = () => {
  const [context, setContext] = useState(false)
  const editor = useRef(null);
  // const { theme } = useTheme()
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [keyword, setKeyword] = useState('')
  const editorConfig = useMemo(() => {
    return {
      // theme: theme === 'dark' ? 'dark' : 'default',
      readonly: false,
      height: 400,

    };
  }, []);


  const handelsubmit = (e) => {
    e.preventDefault();
    window.scroll(0,0)
    setError('Posting Blog...')
    axios.post('/api/blogpost', { title, discription,keyword , image, content })
      .then(res => {
        console.log(res)
        setError('Posted Successfully')

        setTimeout(() => {
          setError('')


        }, 4000);

      }
      )
      .catch((error) => {console.log(error)
        setError(error)

      });

  }

  return (
    <>
      {
        context ? <LoadingSkeleton /> :
          <>


            <div className="container mx-auto xl:w-3/4 py-20">
              <h1  className='text-center text-xl md:text-4xl'>Add Blog</h1>

              <form onSubmit={handelsubmit} className='flex flex-col px-4 gap-6'>
                {error && <span className='text-lg text-red-500 font-semibold'>{error}</span>}

                <label htmlFor="" className='text-xl'>Title:</label>
                <input onChange={(e) => setTitle(e.target.value)} required type="text" placeholder='Title' className='w-full text-lg  border p-4 rounded-md' />
                <label htmlFor="" className='text-xl'>Keywords:</label>
                <textarea onChange={(e) => setKeyword(e.target.value)} required type="text" placeholder='Add Keywords and Seprate them with commos ","' className='w-full h-[100px] text-lg  border p-6 rounded-md' />

                <label htmlFor="" className='text-xl'>Discription:</label>
                <textarea onChange={(e) => setDiscription(e.target.value)} required placeholder='Discription' className='w-full h-[120px] text-lg border p-6 rounded-md' name="" id=""></textarea>

                <label htmlFor="" className='text-xl'>Featured Image:</label>
                <input required onChange={(e) => setImage(e.target.value)} type="url" placeholder='Image Link' className='w-full  text-lg  border p-4 rounded-md' />
                <label htmlFor="" className='text-xl'>Main Content:</label>
                <div className='dark:text-black '>

                  <JoditEditor
                    ref={editor}
                    config={editorConfig}
                    value={content}
                    onBlur={newContent => setContent(newContent)} 
                    onChange={newContent => setContent(newContent)}
                  />
                </div>
                <input type="submit" value={'Submit'} className='w-1/3 py-4  place-self-end cursor-pointer text-white  hard-glass-effect bg-hard-gradient rounded-lg text-2xl ' />

              </form>
            </div>
          </>
      }
    </>
  );
};

export default BlogEditor