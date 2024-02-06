"use client"
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'

const Blog = ({ blogs }) => {
 
  return (
      <div className='mt-5 py-12 w-[100%] mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow space-y-12'>
          {blogs.map((blog) => {
              return <div key={blog._id}>
                <Link href={`/blogs/${blog.slug.current}`}><h1
                  className='mb-1 text-bold text-primary-500  text-3xl'>{blog.title}</h1></Link>
                <Image
                  className='aspect-video w-full object-cover'
        src={urlFor(blog.images[0]).url()}
        width={500}
        height={500}
        alt={blog.title}
      />
                  {/* <p>{blog.content}</p> */}
             </div> 
          })}
    </div>
  )
}
export const dynamic = 'force-dynamic'

export default Blog