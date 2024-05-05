import { Link2Off } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="bg-black text-white py-20 space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight md:py-8 lg:py-10">
              Welcome to WEB HUB
            </h1>
            <p className="mt-3 text-lg sm:text-xl">
              Your trusted partner in web development solutions
            </p>
            <p class="mt-6">
              Ready to take your online presence to the next level? Get in touch
              with us today!
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="https://wa.me/8801759277464"
                target="_blank"
                className="mr-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
              >
                Get Started
              </Link>
              <Link href="https://wa.me/8801759277464"
                  target="_blank"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero