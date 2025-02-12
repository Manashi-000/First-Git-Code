import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-orange-950 text-slate-50 h-[400]  font-roboto px-0'>
            <div className='py-10 flex justify-around'>
                <div>
                    <h1 className='text-lg  font-bold mb-4'>Working Hours</h1>
                    <ul className='list-disc pl-5'>
                        <li>Sunday - Thursday<br></br>8.00 am - 5.00 pm</li>
                        <br></br>
                        <li>Only Friday<br></br>9.00 am - 2.00 pm</li>
                        <br></br>
                        <li>Saturday<br></br>Closed</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h1 className='text-lg font-bold mb-4'>Contact Us</h1>
                    <p className='flex items-center mb-4'><BsFillTelephoneFill className='mr-2' />Phone Number: 98439099090</p>
                    <p className='flex items-center mb-4'><MdEmail className='mr-2' />Email: demo@gmail.com</p>
                    <p className='flex items-center mb-4'><FaLocationDot className='mr-2' />Location: Paknajol, Kathmandu</p>
                </div>

                <div>
                    <h1 className='text-lg font-bold mb-4'>Follow Us</h1>
                    <p className='mb-6'>We invite you to connect<br></br> with us on social media <br></br>and share your feedback.</p>
                    <p className='flex justify-center mr-4'><FaFacebookF className='mr-4 hover:text-orange-700'/> <BsInstagram className='mr-4 hover:text-orange-700'/><FaPinterestP className='mr-4 hover:text-orange-700'/><FaLinkedinIn className='mr-4 hover:text-orange-700'/></p>

                </div>
            </div>
            <p className='text-center'>Copyright ©2023<span className='text-red-900'>Dreamhub</span>. All rights reserved.</p>
        </div>
    )
}

export default Footer