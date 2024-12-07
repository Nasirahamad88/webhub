"use client"
import Link from 'next/link';
import Logo from '../../../public/logo.png'
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-black text-white fixed top-0 left-0 w-full z-10 ">
      <nav className="w-[80%] mx-auto flex items-center justify-between py-4 px-8 border-b border-gray-200 bg-black">
        <Link href="/">
          <div className="font-bold text-xl">
            <Image src={Logo} height={80} width={180} alt="webhab logo" />{" "}
          </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-md">
            <li>
              <Link href="/">
                <div className="hover:text-gray-700 transition-colors">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/notebook">
                <div className="hover:text-gray-700 transition-colors">
                  Notebook
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className="hover:text-gray-700 transition-colors">
                  Services
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pastProjectsPage">
                <div className="hover:text-gray-700 transition-colors">
                  Projects
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="hover:text-gray-700 transition-colors">
                  Contact
                </div>
              </Link>
            </li>
            {/* Dropdown Menu */}
            <li className="relative group">
              <div className="hover:text-gray-700 transition-colors px-4">
                More
              </div>
              <ul className="hidden absolute top-full left-0 w-full py-2 bg-white rounded-md shadow-md group-hover:block">
                <li>
                  <Link href="/blogs">
                    <div className="block text-black px-4 py-2 text-sm hover:bg-gray-100">
                      Blogs
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <div className="block text-black px-4 py-2 text-sm hover:bg-gray-100">
                      FAQ
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group px-6">
              <div className="hover:text-gray-700 transition-colors px-4">
                Tools
              </div>
              <ul className="hidden absolute top-full left-0 w-full py-2 bg-white rounded-md shadow-md group-hover:block">
                <li>
                  <Link href="/tools/hashtag">
                    <div className="block text-black px-4 py-2 text-sm hover:bg-gray-100">
                      Linkedin Hashtags
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/tools/prime">
                    <div className="block text-black px-4 py-2 text-sm hover:bg-gray-100">
                    Prime Number
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="bg-black text-white py-2">
            <li className="px-4 py-2">
              <Link href="/about">
                <div className="hover:text-gray-700 transition-colors">
                  About
                </div>
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/">
                <div className="hover:text-gray-700 transition-colors">
                  Home
                </div>
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/services">
                <div className="hover:text-gray-700 transition-colors">
                  Services
                </div>
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/pastProjectsPage">
                <div className="hover:text-gray-700 transition-colors">
                  Projects
                </div>
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/contact">
                <div className="hover:text-gray-700 transition-colors">
                  Contact
                </div>
              </Link>
            </li>
            <li className="px-4 py-2">
              <div
                className="hover:text-gray-700 transition-colors"
                onClick={toggleMenu}
              >
                More
              </div>
              <ul className={isOpen ? "block" : "hidden"}>
                <li>
                  <Link href="/blogs">
                    <div className="block text-white px-4 py-2 hover:bg-gray-800">
                      Blogs
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <div className="block text-white px-4 py-2 hover:bg-gray-800">
                      FAQ
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;