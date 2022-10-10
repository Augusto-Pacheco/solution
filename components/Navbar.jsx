import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const  [nav, setNav]  = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="flex-1">
      <h1 className="font-bold text-4xl">Pentcloud</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal hidden sm:flex">
          <li className="p-4">
            <Link href="/home">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile button*/}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div> 
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/home">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/services">Services</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
