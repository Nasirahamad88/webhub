
import React from 'react'
import { client } from '../../lib/sanity'
import {PortableText} from '@portabletext/react'

import Image from 'next/image'

import { urlFor } from '../../lib/sanity'
import Link from 'next/link'



const page = async ({params}) => {
  const { _id } =params;
const query = `*[_type=='blogpost' && 
  slug.current=="${_id}"]{
    title,
    content,
    images
  }
`
  const blogs = await client.fetch(query)
  
  
  
  return (
  <div className='mt-20 w-[70%] mx-auto'>
  {blogs.map((blog) => (
    <div key={blog._id} className="mb-12 border-b-2 border-gray-200 pb-8">
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      {blog.images && blog.images.length > 0 && (
        <div className="mb-4">
          <Image
            src={urlFor(blog.images[0]).url()} // Assuming the first image is used
            width={300}
            height={300}
            alt={blog.title}
            className="rounded-lg"
          />
        </div>
      )}
      <p className="text-lg leading-relaxed">{blog.content}</p>
    </div>
  ))}
</div>

);
    
  
}

export default page