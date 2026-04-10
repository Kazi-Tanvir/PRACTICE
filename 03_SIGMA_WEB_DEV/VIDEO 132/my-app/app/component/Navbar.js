"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
      <h1>Dynamic Route: {pathname}</h1>
    </div>
  )
}

export default Navbar;
