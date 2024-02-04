"use client"
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/sanity'

const Blog = ({ blogs }) => {
    console.log(blogs)
  return (
      <div className='mt-5 w-[80%] mx-auto'>
          {blogs.map((blog) => {
              return <div key={blog._id}>
                  <h1 className='font-bold my-3 text-4xl '>{blog.title}</h1>
                  <Image
        src={urlFor(blog.images[0]).url()}
        width={500}
        height={500}
        alt={blog.title}
      />
                  <p>{blog.content}</p>
             </div> 
          })}
    </div>
  )
}
export const dynamic = 'force-dynamic'

export default Blog