import React from 'react'
import { client } from '../lib/sanity'
import Blog from './blog'


const getData = async () => {
  const query = `*[_type=='blogpost']`
  const data = await client.fetch(query)
  return data
}

const page = async () => {

    const blogs = await getData()
    
  return (
    <div className=' mt-36'>
      
    
      <Blog blogs={blogs} />
    </div>
  )
}
export const dynamic = 'force-dynamic'

export default page