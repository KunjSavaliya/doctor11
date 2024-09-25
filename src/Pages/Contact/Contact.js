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
            {/* Banner Section */}
            <div className="relative w-full h-[300px] md:h-[400px] -mt-2">
                <img src={doctor} alt="carousel" className="w-full h-full object-cover" />
                <div className="flex flex-col gap-6 absolute top-0 left-0 p-5 text-white h-full justify-center items-start lg:pl-36">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact us</h2>
                    <div className="flex gap-2 text-lg md:text-xl">
                        <p className="text-[#14B0EB] font-medium cursor-pointer" onClick={handleHomeClick}>
                            Home
                        </p>
                        <p className="font-bold">{'>'} Get In Touch</p>
                    </div>
                </div>
            </div>

            {/* Contact and Map Section */}
            <div className="px-5 md:px-[10%] xl:px-[20%] mt-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Contact Details */}
                    <div className="bg-[#14B0EB] p-8 md:p-10 w-full lg:w-1/2 animate__animated animate__fadeInLeft">
                        <div>
                            <p className="text-white font-bold text-2xl md:text-3xl">Contact Details</p>
                            <p className="text-[#fffc] mt-3">Get in touch with us for any questions about our industries or projects.</p>
                            
                            <div className="flex gap-3 mt-6 items-center">
                                <CiLocationOn className="text-[#fffc] text-3xl md:text-4xl" />
                                <p className="text-[#fffc]">Rosevill sky Opp Croma, Nr. Shukan cross road, Nikol - Naroda Rd, Ahmedabad, Gujarat 382346</p>
                            </div>
                            
                            <div className="flex gap-3 mt-6 items-center">
                                <HiOutlineMailOpen className="text-[#fffc] text-3xl md:text-4xl" />
                                <div>
                                    <p className="text-[#fffc] font-bold">Email us</p>
                                    <p className="text-[#fffc]">info@drjaydipramanivascularsurgeon.com</p>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6 items-center">
                                <MdAddIcCall className="text-[#fffc] text-3xl md:text-4xl" />
                                <div>
                                    <p className="text-[#fffc] font-bold">Call Support</p>
                                    <p className="text-[#fffc]">7862058448</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    {/* <div className="w-full lg:w-1/2 h-[300px] md:h-[450px] animate__animated animate__fadeInRight">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Contact;
