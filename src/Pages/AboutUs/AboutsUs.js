import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctor from '../../Images/urology-banner.jpg';
import doctorName from '../../Images/drjaydip.jpg';
import CountUp from 'react-countup';
function AboutsUs() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };
    return (
        <>
            <div className="relative w-full h-[400px] -mt-2">
                <img src={doctor} alt="carousel" className="w-full h-full object-cover" />
                <div className="flex flex-col gap-10 absolute top-0 left-0 p-5 text-white h-[100%] justify-center items-start">
                    <h2 className="text-4xl lg:text-5xl font-bold lg:pl-36">Doctor Profile</h2>
                    <div className='lg:pl-36 flex gap-3'>
                        <p className='text-xl text-[#14B0EB] font-medium cursor-pointer' onClick={handleHomeClick}>
                            Home
                        </p>
                        <p className='font-bold text-xl'> {'>'} Doctor Profile</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className=" p-4 lg:pl-[25%] lg:pr-[25%]  text-3xl font-semibold lg:text-5xl text-[#001e57] mt-3 text-center">Dr. Jaydip Ramani Top Minimal Invasive Keyhole Cardiac Surgeon in Ahmedabad</p>
                <p className=" p-4 lg:pl-[25%] lg:pr-[25%] text-xl  font-semibold lg:text-xl text-[#555555] mt-3 text-center">Dr. Jaydip Ramani is a senior, qualified Minimal Invasive Keyhole Heart & Vascular Surgeon in clinical practice for the last 12+ years. Dr. Jaydip Ramani is working at Plexus Heart Surgery Centre which is a state-of-the-art, specialized Minimal Invasive Keyhole Heart Surgery for Cardio Thoracic Vascular Surgeon. The hospital has trained & dedicated staff and all the modern equipment for the diagnosis and treatments of Heart Vascular disorders. Our team offers comprehensive state-of-the-art Diagnostic and Therapeutic Interventions for the entire spectrum of vascular disorders, from Medical Management to Minimally Invasive Keyhole Heart Surgery to Conventional Open Heart Surgery.</p>

            </div>
            <div className=" flex-row lg:flex flex-wrap justify-center item-center xl:pl-[25%] xl:pr-[25%] p-4">
                <div className='flex flex-wrap justify-center lg:justify-end animate__animated animate__fadeInLeft'>
                    <div className="flex flex-wrap gap-5 p-3 ">
                        <img src={doctorName} alt='Vascular Surgeon' width={400} height={500} className='  h-[450px]  animate__animated animate__fadeInUp ' />
                    </div>
                </div>
                <div className="flex-1 text-center animate__animated animate__fadeInRight">
                    <p className="font-bold text-2xl text-[#555555] mt-5 text-center" >
                        SPECIALITY</p>
                    <p className=' mt-5 text-[#555555] text-md  '>
                        Vascular & Minimal Invasive Keyhole Heart Surgeon
                    </p>
                    <p className="font-bold text-2xl text-[#555555] mt-5">
                        DEGREE</p>
                    <p className='text-gray-600 mt-5'>
                        M.B.B.S., M.S., M.C.S.
                    </p>
                    <p className=' text-[#555555] text-md '>
                        Minimal Invasive Keyhole Cardiac Surgeon
                    </p>
                    <p className='mt-10 text-[#555555] text-md text-justify p-5'>
                        In the last 12+ years. Dr. Jaydip Ramani has successfully performed over 3,000 Minimal Invasive Keyhole Heart operations besides being associated with over 25,000 major cardiovascular procedures. This includes arterial coronary bypass graft surgery, Aortic / Mitral /Tricuspid valve repair & replacements, (MICAS) Beating heart surgery, Aortic root surgery, Aneurysm surgery, heart transplantation, heart tumor / Myxoma surgery, and other complex cardiac procedures.
                    </p>
                    <div className='flex flex-col lg:flex lg:flex-row shadow-2xl p-8 justify-around mt-10 flex-wrap gap-5  animate__animated animate__fadeInRight  '>
                        <div className="flex flex-col items-center">
                            <p className='text-4xl text-[#14B0EB] text-center'>
                                <CountUp end={12} duration={2} />+
                            </p>
                            <p className='text-md font-semibold text-center'>Years Experience</p>
                        </div>
                        <div className="border-l border-gray-400 h-20 mx-2 hidden lg:block"></div>

                        <div className="flex flex-col items-center">
                            <p className='text-4xl text-[#14B0EB] text-center'>
                                <CountUp end={5000} duration={2} />+
                            </p>
                            <p className='text-md font-semibold text-center'>Surgery Done</p>
                        </div>
                        <div className="border-l border-gray-400 h-20 mx-2 hidden lg:block"></div>

                        <div className="flex flex-col items-center">
                            <p className='text-4xl text-[#14B0EB] text-center'>
                                <CountUp end={2800} duration={2} />+
                            </p>
                            <p className='text-md font-semibold text-center'>MICS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='opacity-90 p-20 bg-[#001e57] flex flex-col lg:flex-row lg:pl-[20%] lg:pr-[20%]'>
                <div className='p-14 w-[100%] bg-white -mt-5'>
                    <p className="text-3xl font-extrabold lg:text-4xl bg-white text-[#001e57] mt-3 text-center">
                        Our Mission
                    </p>
                    <hr className='border-t-1 border-gray-600 w-20 mx-auto mt-4' />
                    <p className='text-[#555555] text-xl mt-4 text-center'>
                        Our doctors are committed to providing you with the best possible care. They will take the time to listen to your concerns and answer your questions.
                    </p>
                </div>
                <div className='p-14 w-[100%] bg-white mt-4 lg:mt-0 -mb-10'>
                    <p className="text-3xl font-extrabold lg:text-4xl text-[#001e57] mt-3 text-center">
                        Our Vision
                    </p>
                    <hr className='border-t-1 border-gray-600 w-20 mx-auto mt-4' />
                    <p className='text-[#555555] text-xl text-center mt-4'>
                        We are here to help you achieve and maintain your optimal health. If you are looking for a team of experienced and caring doctors, we encourage you to contact us today.
                    </p>
                </div>
            </div>

        </>
    );
}

export default AboutsUs;
