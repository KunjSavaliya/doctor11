import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { MdAddCall } from "react-icons/md";
import logo from "../Images/logo.jpg";
import { BsClock } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from 'react-router';

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1023);
    const navigate = useNavigate();
    const handleScroll = () => {
        if (!isMobile) {
            const offset = window.scrollY;
            setSticky(offset > 100);
        }
    };
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);
   

    return (
        <>
            <div className='flex flex-col lg:flex-row bg-[#f3f5f9] pl-10 pr-10 p-5'>
                <div className="text-gray-800 text-md flex flex-col items-start pl-10 pr-10 overflow-hidden">
                    <p className="animate-marquee whitespace-nowrap max-w-full text-left hidden lg:block">
                        In the last 12+ years. Dr. Jaydip Ramani has successfully performed over 5,000 Minimal Invasive Keyhole Heart operations...
                    </p>
                </div>
                <div className="flex justify-center space-x-6 lg:space-x-4 lg:mt-0 items-center w-1/3">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#555555]">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#555555]">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#555555]">
                        <FaYoutube size={20} />
                    </a>
                </div>
            </div>

            <div className={`flex flex-col items-center lg:flex-row justify-around p-3 transition-all duration-300 ${isSticky && !isMobile ? 'fixed top-0 left-0 right-0 bg-white shadow-lg z-50 animate__animated animate__fadeInDown' : 'relative'}`}>
                <div className="flex items-center mb-4 lg:mb-0">
                    <img src={logo} alt='Logo' width={300} height={100} />
                </div>
                {isSticky && !isMobile ? (
                    <div className='flex gap-10 mb-3 pl-10 text-md text-[#14B0EB] font-bold justify-center items-center hidden lg:flex cursor-pointer'>
                        <p  onClick={ () => navigate('/')}>HOME</p>
                        <p onClick={ () => navigate('/about-us')}>ABOUT US</p>
                        <p>SERVICES</p>
                        <p onClick={ () => navigate('/contact')}>CONTACT</p>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center gap-6">
                        <div className='flex gap-5'>
                            <MdAddCall size={30} className='text-[#14B0EB] mt-3' />
                            <div className="text-gray-800">
                                <p className='font-bold'>Call Us Today</p>
                                <p className='font-normal'>786-205-8448</p>
                            </div>
                        </div>
                        <div className="border-l border-gray-400 h-10 mx-2 hidden lg:block"></div>
                        <div className='flex gap-3'>
                            <BsClock size={30} className='text-[#14B0EB] mt-3' />
                            <div className="text-gray-800 ">
                                <p className='font-bold'>Working Hours</p>
                                <p className='font-normal'>Mon - Sat: 10:00 AM to 8:00 PM</p>
                            </div>
                        </div>
                        <div className="border-l border-gray-400 h-10 mx-2 hidden lg:block"></div>
                        <div className='flex gap-3'>
                            <GrHomeRounded size={30} className='text-[#14B0EB] mt-3' />
                            <div className="text-gray-800">
                                <p className='font-bold'>Plexus Heart Surgery Center</p>
                                <p className='font-normal'>Nikol, Ahmedabad, Gujarat</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='flex flex-col lg:flex-row pl-10 pr-10 lg:pl-52 lg:pr-52'>
                <div className='flex justify-between bg-[#001e57] w-full p-5'>
                    <div className='flex gap-10 mb-3 pl-10 text-md text-white font-bold justify-center items-center hidden lg:flex cursor-pointer'>
                    <p  onClick={ () => navigate('/')}>HOME</p>
                        <p  onClick={ () => navigate('/about-us')}>ABOUT US</p>
                        <p>SERVICES</p>
                        <p onClick={ () => navigate('/contact')}>CONTACT</p>
                    </div>
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className='lg:hidden text-white font-bold flex justify-end'
                    >
                        <HiMenu size={30} className='text-[#14B0EB]' />
                    </button>

                    {isDropdownOpen && (
                        <div className='flex flex-col items-center mt-16 lg:hidden'>
                            <img src={logo} alt='Logo' width={150} height={50} className="mb-2" />
                            <div className='bg-orange-500 border-2 border-white w-full p-2 cursor-pointer'>
                                <p className='text-white font-bold border-2 p-3 border-white mb-2 '  onClick={ () => navigate('/')}>HOME</p>
                                <p className='text-white font-bold border-2 p-3 border-white mb-2'  onClick={ () => navigate('/about-us')}>ABOUT US</p>
                                <p className='text-white font-bold border-2 p-3 border-white mb-2'>SERVICES</p>
                                <p className='text-white font-bold border-2 p-3 border-white' onClick={ () => navigate('/contact')}>CONTACT</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-center gap-5 mb-2 text-white font-bold lg:bg-[#14B0EB]'>
                    <button className='w-52 hidden lg:block'>BOOK AN APPOINTMENT</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
