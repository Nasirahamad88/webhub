import React from 'react';
import Image from 'next/image';
import Image1 from '../../../public/banner/7.png'
import Image2 from '../../../public/banner/design.png'
import Image3 from '../../../public/banner/test.png'
import Image4 from '../../../public/banner/9.png'
import GraphSection from '../Graparrow/page';

function Steps() {
  return (
    <section className=" text-black text-center justify-center  px-4 py-16 bg-slate-900 ">
      <h2 className="text-6xl font-bold mb-8 text-center">Our Process</h2>
      <div className=" sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Step 1: Strategy */}
        <div className="rounded-lg shadow-md bg-slate-900 p-8 flex items-center justify-center ">
          <h3 className="text-4xl font-bold mb-4  w-1/3 mx-auto">
            <span className="text-blue-500">01</span> Strategy
          </h3>
                  <Image
            src={Image1} // Replace with your image path
            alt="Strategy image"
            width={400}
            height={200}
            className=" mb-4 rounded-full border-8 border-sky-500  w-1/3 mx-auto "
            // layout="fill"
            objectFit="cover"
          />
          
          <p className="mb-4  w-1/3 mx-auto">
            We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.
          </p>
              </div>
              <div className='text-white items-center'> <GraphSection/></div>

        {/* Step 2: Design */}
        <div className="rounded-lg bg-slate-900 shadow-md p-8 flex items-center justify-center ">
          <p className="mb-4 w-1/3 mx-auto">
            Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you.

          </p>
                  
                  <Image
            src={Image2} // Replace with your image path
            alt="Design image"
            width={400}
            height={200}
            className="mb-4 rounded-full border-8 border-sky-500  w-1/3 mx-auto"
            // layout="fill"
            objectFit="cover"
          />
          <h3 className="text-4xl font-bold mb-4  w-1/3 mx-auto">
            <span className="text-blue-500">02</span> Design
          </h3>
          
              </div>
              <GraphSection/>

              {/* Step 3: Develop */}
              <div className="rounded-lg bg-slate-900 shadow-md  p-8 flex items-center justify-center ">
          <h3 className=" font-bold mb-4  w-1/3 mx-auto text-4xl">
            <span className="text-blue-500">03</span> Design
          </h3>
          
                  <Image
            src={Image3} // Replace with your image path
            alt="Design image"
            width={400}
            height={200}
            className="mb-4 rounded-full border-8 border-sky-500  w-1/3 mx-auto"
            // layout="fill"
            objectFit="cover"
          />
          
          <p className="mb-4  w-1/3 mx-auto">
           

              We turn your ideas into a reality. &our website is placed on a “development server” where you get to watch the whole process, live.
          </p>
              </div>
              <GraphSection/>
              <div className="rounded-lg bg-slate-900 shadow-md p-8 flex items-center justify-center ">
         <p className="mb-4  w-1/3 mx-auto">
            This is where you go live, to the world. Design, marketing, and maintenance; we’ll be at your side for the life of your site.

          </p>
         
                  <Image
            src={Image4} // Replace with your image path
            alt="Design image"
            width={400}
            height={200}
            className="mb-4 rounded-full border-8 border-sky-500  w-1/3 mx-auto"
            // layout="fill"
            objectFit="cover"
          />
          <h3 className=" font-bold mb-4 text-4xl w-1/3 mx-auto">
            <span className="text-blue-500  ">04</span> Design
          </h3>
          
              </div>
              <div className='text-white items-center'> <GraphSection/></div>
             
        {/* ... Repeat for steps 3 and 4, replacing images and content ... */}
      </div>
    </section>
  );
}

export default Steps;
