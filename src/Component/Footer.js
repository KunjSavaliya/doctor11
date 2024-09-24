import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

function Footer() {
    return (
        <>
            <div className='bg-[#030e22] p-16 flex flex-wrap justify-between gap-12 '>
                <div>
                    <p className='text-white font-bold text-xl'>
                        About Our Expert
                    </p>
                    <p className='text-white w-72 mt-4'>
                        Dr. Jaydip Ramani is a senior, qualified Vascular and Minimal Invasive Keyhole Heart Surgeon in clinical practice for the last 12+ years. Dr. Jaydip Ramani is working at Plexus Heart Surgery Centre which is a state-of-the-art, specialized Minimal Invasive Keyhole Heart Surgery for Cardio Thoracic Vascular Surgeon.
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
                        Heart Valve Surgeries
                    </p>

                    <p className='text-white    '>
                        Minimally Invasive CABG
                    </p> <p className='text-white   '>
                        Mitral Valve Replacement
                    </p> <p className='text-white   '>
                        Coronary Artery Bypass
                    </p> <p className='text-white   '>
                        L.V. Aneurysms Operation
                    </p>
                    <p className='text-white'>
                        Aortic root surgery (Aneurysms)
                    </p>
                    <p className='text-white'>
                        Coronary Endarterectomy
                    </p>
                    <p className='text-white'>
                        Myxoma
                    </p>

                </div>
                <div>
                    <p className='text-white font-bold text-xl'>
                        Website Visitors
                    </p>
                </div>
                <div>
                    <p className='text-white font-bold text-xl'>
                        Contact
                    </p>
                    <p className='text-white font-bold text-xl'>
                        7862058448
                    </p>
                    <p className='text-white w-72 '>
                        Rosevill sky Opp Croma, Nr. Shukan cross road, Nikol - Naroda Rd, Ahmedabad, Gujarat 382346
                    </p>
                    <p className=' text-blue-600 '>
                        info@drjaydipramanivascularsurgeon.com
                    </p>

                    <p className='text-white '>
                        Mon - Sat :-
                    </p>
                    <p className='text-white '>
                        10:00 AM to 8:00 PM
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
