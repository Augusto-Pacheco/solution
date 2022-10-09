import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link rel="stylesheet" href="/pentcloud">
          <h1>Pentcloud</h1>
        </Link>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
