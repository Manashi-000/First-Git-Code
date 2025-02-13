import Link from 'next/link';
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='transition-all duration-200 h-[60] z-[100] flex items-center justify-between my-2  w-full sticky top-0 left-0 right-0 '>
      <div className='mx-12'>
        <h1>logo</h1>
      </div>
      <div className='text-primary font-semibold text-right font-roboto space-x-6 mx-20 flex items-center transition-all duration-200'>

        <Link href='/' className='hover:text-orange-700'>HOME</Link>
        <Link href='/about' className='hover:text-orange-700'>ABOUT US</Link>
        <Link href='/service' className='hover:text-orange-700'>OUR SEVICES</Link>
        <Link href='/contact' className='hover:text-orange-700'>CONTACT US</Link>
        <Link href='/cart' className='hover:text-orange-700'><MdOutlineShoppingCart fontSize={25} /></Link>
      </div>
    </div>
  );
};

export default Navbar;