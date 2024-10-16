import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import couter from "../Images/freecounterstat.png";

function Footer() {
    return (
        <>
            <div className='bg-[#030e22]  p-5 md:p-16 flex flex-wrap justify-between gap-12 '>
                <div>
                    <p className='text-white font-bold text-xl'>
                        About Our Expert
                    </p>
                    <p className='text-white md:w-72 mt-4'>
                        Tashree Hospital & Endoscopy Centre offers a comprehensive range of infertility services and Gynaec Endoscopic Surgeries under one roof and we are known for our innovation, integrity, medical and technical excellence, personalised services, and consistent willingness to accept patients facing the most difficult medical challenges.
                    </p>
                    <p className='border-gray-600 text-white border-[1px] w-40 rounded-sm mt-4 p-3'>
                        Read More....
                    </p>
                </div>
                <div>
                    <p className='text-white font-bold text-xl'>
                        Our Services
                    </p>
                    <p className='text-white   mt-4 '>
                        Maternity Department
                    </p>
                    <p className='text-white '>
                        Department of Gynecology
                    </p> <p className='text-white   '>
                        Embryo Center
                    </p> <p className='text-white   '>
                        Laser Hair Removal
                    </p> <p className='text-white   '>
                        Laparoscopy
                    </p>
                    <p className='text-white'>
                        Sonography Infertility Division(I.V.F)
                    </p>
                    <p className='text-white'>
                        Homeopthic Skin Care
                    </p>

                </div>
                <div>
                    <p className='text-white font-bold text-xl'>
                        Website Visitors
                    </p>
                    <img src={couter} alt='couter' width={300} height={100} className='mt-5' />

                </div>
                <div>
                    <p className='text-white font-bold text-xl'>
                        Contact
                    </p>
                    <p className='text-white font-bold text-xl'>
                        7862058448
                    </p>
                    <p className='text-white md:w-72 '>
                        Rosevill sky Opp Croma, Nr. Shukan cross road, Nikol - Naroda Rd, Ahmedabad, Gujarat 382346
                    </p>
                    <p className=' text-blue-600 '>
                        info@drjaydipramanivascularsurgeon.com
                    </p>
                    <p className='text-white '>
                        Mon - Sat :-
                    </p>
                    <p className='text-white '>
                        10:00 AM to 8:00 P
                    </p>
                </div>
                <hr className='border-t-1 border-gray-600 w-full ' />
                <div className='flex justify-between w-full '>
                    <div className="">
                        <p className="text-white">
                            © 2022 Dr. Jaydip Ramani Top Vascular Surgeon. Managed By - EEG Technogeeks
                        </p>
                    </div>
                    <div className="flex gap-4">
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
            </div>


        </ >
    )
}

export default Footer
