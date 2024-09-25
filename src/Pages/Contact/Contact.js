import React from 'react';
import doctor from '../../Images/urology-banner.jpg';
import { useNavigate } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdAddIcCall } from "react-icons/md";

function Contact() {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };
    return (
        <div>
            <div className="relative w-full h-[400px] -mt-2">
                <img src={doctor} alt="carousel" className="w-full h-full object-cover" />
                <div className="flex flex-col gap-10 absolute top-0 left-0 p-5 text-white h-[100%] justify-center items-start">
                    <h2 className="text-4xl lg:text-5xl font-bold lg:pl-36">Contact us</h2>
                    <div className='lg:pl-36 flex gap-3'>
                        <p className='text-xl text-[#14B0EB] font-medium cursor-pointer' onClick={handleHomeClick}>
                            Home
                        </p>
                        <p className='font-bold text-xl'> {'>'} Get In Touch</p>
                    </div>
                </div>
            </div>
            <div className='pl-[5%] pr-[5%] mt-10 xl:pl-[20%] xl:pr-[20%]'>
                <div className="flex flex-col lg:flex-row gap-10">

                    <div className='bg-[#14B0EB] p-10 w-full lg:w-1/2 animate__animated animate__fadeInLeft' >
                        <div className='mt-6'>
                            <p className='text-white font-bold text-3xl'>Contact Details</p>
                            <p className='text-[#fffc]'>Get in touch with us for any questions about our industries or projects.</p>
                            <div className='flex gap-3 mt-6'>
                                <CiLocationOn className='mb-2 text-[#fffc] size-30 lg:size-[72px]' />
                                <div>

                                    <p className='text-[#fffc]'>Rosevill sky Opp Croma, Nr. Shukan cross road, Nikol - Naroda Rd, Ahmedabad, Gujarat 382346</p>
                                </div>
                            </div>
                            <div className='flex gap-3 mt-6'>
                                <HiOutlineMailOpen size={30} className='mb-2 text-[#fffc]' />
                                <div>
                                    <p className='text-[#fffc] font-bold'>Email us</p>
                                    <p className='text-[#fffc]'>info@drjaydipramanivascularsurgeon.com</p>
                                </div>
                            </div>
                            <div className='flex gap-3 mt-6'>
                                <MdAddIcCall size={30} className='mb-2 text-[#fffc]' />
                                <div>
                                    <p className='text-[#fffc] font-bold'>Call Support</p>
                                    <p className='text-[#fffc]'>7862058448</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/1 h-[450px] mt-10 lg:mt-0 animate__animated animate__fadeInRight">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.102117734681!2d72.62462677609533!3d23.07664148490971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87d7a385ab7f%3A0x428ae743f3ae5f4c!2sRoseville%20Sky!5e0!3m2!1sen!2sin!4v1695654992847!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
