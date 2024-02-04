import Link from 'next/link';
import Logo from '../../../public/logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className=" bg-black text-white fixed top-0 left-0 w-full z-10 ">
      <nav className="w-[80%] mx-auto flex items-center justify-between py-4 border-b border-gray-200 bg-black">
      <Link href="/">
        <div className="font-bold text-xl"><Image src={Logo} height={80} width={180} alt='webhav logo'/> </div>
      </Link>
      <div className="hidden md:block">
        <ul className="flex space-x-4 text-md">
          <li>
            <Link href="/about">
              <div className="hover:text-gray-700 transition-colors">About</div>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <div className="hover:text-gray-700 transition-colors">Services</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="hover:text-gray-700 transition-colors">Contact</div>
            </Link>
          </li>
          {/* Dropdown Menu */}
          <li className="relative group">
            <div className="hover:text-gray-700 transition-colors px-4">More</div>
            <ul className="hidden absolute top-full left-0 w-full py-2 bg-white rounded-md shadow-md group-hover:block">
              <li>
                <Link href="/blogs">
                  <div className="block text-black px-4 py-2 text-sm hover:bg-gray-100">Blogs</div>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <div className="block text-black px-4 py-2 text-sm hover:bg-gray-100">FAQ</div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button className="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
          </nav>
          </div>
  );
};

export default Navbar;