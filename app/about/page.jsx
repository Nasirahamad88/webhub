import React from 'react'


export const metadata = {
  title: "About WebHub - Your Trusted Digital Partner",
  description: "Discover who we are and what drives us at WebHub! We're a passionate team of web developers, WordPress experts, SEO strategists, graphic designers, and social media specialists dedicated to crafting exceptional digital experiences. Learn about our values, expertise, and commitment to elevating your online presence.",
};


const page = () => {
  return (
      <div className='mt-20 w-[80%] mx-auto'>
          
        <title>About Us - Your Agency Name</title>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          We are a full-service digital agency specializing in web development, WordPress development, graphic design, SEO, and more.
        </p>
        <p className="text-lg mb-6">
          Our mission is to provide innovative and customized solutions to help businesses thrive in the digital landscape. With our team of experts, we strive to deliver high-quality results that exceed our clients' expectations.
        </p>
        <p className="text-lg">
          Whether you're a small startup or a large enterprise, we have the expertise and resources to take your online presence to the next level.
              </p>
              <div className="md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg mb-6">
              We are a dynamic team of creative professionals dedicated to helping businesses succeed in the digital world.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              Our mission is to empower businesses with innovative digital solutions that drive growth and deliver exceptional results.
            </p>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6">
              <li className="text-lg mb-2">Web Development</li>
              <li className="text-lg mb-2">WordPress Development</li>
              <li className="text-lg mb-2">Graphic Design</li>
              <li className="text-lg mb-2">SEO Services</li>
              <li className="text-lg mb-2">Social Media Management</li>
            </ul>
          </div>
      </div> </div>
  )
}

export default page