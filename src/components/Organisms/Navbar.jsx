import React, { useState } from 'react'
import { Eyeball } from '../Molecules/Eyeball'
import Link from 'next/link'

export const Navbar = () => {

  return (
    <div className='fixed z-10 justify-around items-center w-full text-white font-semibold text-lg px-10 backdrop-blur-md hidden md:flex'>
        <div className=''>
          <Link className='hover:bg-white hover:text-black px-3 py-1 rounded' href={"/about"}>About</Link>
        </div>
        <div>
          <Link className='hover:bg-white hover:text-black px-3 py-1 rounded' href={"/skill"}>Skills</Link>
        </div>
        <div className=''>
          <Link href={"/"}>
            <Eyeball/>  
          </Link>
        </div>
        <div className=''>
          <Link className='hover:bg-white hover:text-black px-3 py-1 rounded' href={"/project"}>Projects</Link>
        </div>
        <div className=''>
          <Link className='hover:bg-white hover:text-black px-3 py-1 rounded' href={"/contact"}>Contacts</Link>
        </div>
    </div>
  )
}
