import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='h-[60] flex items-center justify-between'>
        <div className='mx-12'>
            <h1>logo</h1>
        </div>
        <div className='text-primary font-semibold text-right font-roboto space-x-6 mx-20 flex items-center'>
            <a href=''className='hover:text-orange-700'>HOME</a>
            <a href=''className='hover:text-orange-700'>ABOUT US</a>
            <a href=''className='hover:text-orange-700'>OUR SEVICES</a>
            <a href=''className='hover:text-orange-700'>CONTACT US</a>
            <a href=''className='hover:text-orange-700'><MdOutlineShoppingCart fontSize={25}/></a>
        </div>
    </div>
  );
};

export default Navbar;