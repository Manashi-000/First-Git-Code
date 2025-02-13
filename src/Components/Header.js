import React from 'react'
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
const Header = () => {
  return (
    <div className='bg-orange-950 text-slate-100 flex items-center justify-between h-[50px]'>
      <div className='ml-20 text-2xl font-serif'>
        <p>Brewed to perfection, served with love.</p>
      </div>
      <div className=' justify-end h-full flex item-center text-3xl items-center mr-20'>
        <p><MdAccountCircle className=' hover:text-orange-700 mr-4' /></p>
        <p><IoSearch className=' hover:text-orange-700'/></p>
      </div>
    </div>
  )
}

export default Header;