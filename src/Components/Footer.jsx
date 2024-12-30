import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='flex  w-full text-white '>
                <div className='bg-[#1F2937] w-1/2 py-10 space-y-3 '>
                    <h1>CONTACT US</h1>
                    <p>123 ABS Street, Uni 21,  <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] w-1/2 py-10 space-y-3'>
                    <h1>Follow US</h1>
                    <p>Join us on social media</p>
                    <div className='flex justify-center gap-3'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className='bg-[#151515] text-white py-3'>
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;