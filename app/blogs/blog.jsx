"use client"
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'

const Blog = ({ blogs }) => {
 
  return (
      
    <div className='mt-5 py-12 w-full mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg space-y-8'>
      {blogs.map((blog) => (
        <div key={blog._id} className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-8">
          <div className="flex-none w-full md:w-1/3">
            <Link href={`/blogs/${blog.slug.current}`}>
              <>
                <Image
                  className='w-full h-full object-cover rounded-lg'
                  src={urlFor(blog.images[0]).url()}
                  width={500}
                  height={500}
                  alt={blog.title}
                />
              </>
            </Link>
          </div>
          <div className="flex-grow">
            <Link href={`/blogs/${blog.slug.current}`}>
              <>
                <h1 className='mb-2 text-2xl md:text-3xl font-bold text-primary-500'>{blog.title}</h1>
              </>
            </Link>
            <p className="text-gray-700">{blog.excerpt}</p>
            <Link href={`/blogs/${blog.slug.current}`}>
              <div className="text-primary-500 hover:underline text-blue-800">Read more</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
export const dynamic = 'force-dynamic'

export default Blog