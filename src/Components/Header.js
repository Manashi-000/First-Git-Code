import React from 'react'
import { IoSearch } from "react-icons/io5";
const Header = () => {
  return (
    <div className='bg-orange-950 h-[50px] '>
    <div className='text-right'>
                <span className='text-slate-100 text-right text-2xl'><IoSearch/></span>
    </div>
    </div>
  )
}

export default Header;