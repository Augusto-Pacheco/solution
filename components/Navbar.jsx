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

        {/* mobile button
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div> */}
        {/* Mobile Menu */}
        <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-square sm:hidden z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
      </div>
    </div>
  );
};
