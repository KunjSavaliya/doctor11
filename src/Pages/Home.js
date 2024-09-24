import React, { useState } from 'react';
import img1 from '../Images/bn1.jpg';
import img2 from '../Images/bn2.jpg';
import img3 from '../Images/bn3.jpg';
import hp1 from '../Images/img.png';
import hp2 from '../Images/img2.png';
import hp3 from '../Images/img3.jpg';
import hp4 from '../Images/img4.jpg';
import hp5 from '../Images/img5.jpg';
import hp6 from '../Images/img6.png';
import hp7 from '../Images/img7.png';
import hp8 from '../Images/img8.png';
import hp9 from '../Images/img9.png';
import doctor from '../Images/docrorimg.png';
import 'animate.css';



function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img2, img3, img1];
    const textContent = [
        "Complete Heart Care Solutions Under One Roof",
        "Advance Keyhole Heart Surgeon",
        "Dr. Jaydip Ramani is Top Minimal Invasive Heart Surgeon"
    ];

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="relative w-full h-[400px] -mt-2 ">
                <img src={images[currentImage]} alt="carousel" className="w-full h-full object-cover" />
                <div className=" flex
                
                flex-col gap-10 absolute top-0 left-0 p-5 text-white">
                    <h2 className=" text-3xl lg:text-5xl w-[70%] font-bold lg:pl-36 animate__animated animate__fadeInDown">{textContent[currentImage]}</h2>
                    <div className='lg:pl-36'>
                        <button className=" text-white font-bold bg-[#14B0EB] px-5 py-4 rounded animate__animated animate__fadeInUp">BOOK AN APPOINTMENT </button>

                    </div>
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                >
                    &#10094;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                >
                    &#10095;
                </button>
            </div>
            <div className="flex flex-wrap "> {/* Main div with 50% width */}
                {/* Left Section with Text */}
                <div className="flex-1  w-[50%] bg-[#f3f5f9] p-8 lg:pl-32 lg:pr-32">
                    <p className="font-normal text-gray-300">Top Keyhole Heart Surgeon in Ahmedabad</p>
                    <p className="font-semibold text-4xl text-blue-700 mt-3">Dr. Jaydip Ramani - Best Cardiac Surgeon in Ahmedabad</p>
                    <p className='text-gray-600 mt-5 text-justify'>
                        Dr. Jaydip Ramani is a senior, qualified Vascular and Minimal Invasive Keyhole Heart Surgeon in clinical practice for the last 12 years.
                        Dr. Jaydip Ramani, the best cardiac surgeon in Ahmedabad, is working at Plexus Heart Surgery Centre, which is a state-of-the-art, specialized Minimal Invasive Keyhole Heart Surgery for Cardio Thoracic Vascular Surgery.
                        The hospital has trained & dedicated staff and all the modern equipment for the diagnosis and treatment of Heart Vascular disorders.
                        Our team offers comprehensive state-of-the-art Diagnostic and Therapeutic Interventions for the entire spectrum of vascular disorders,
                        from Medical Management to Minimally Invasive Keyhole Heart Surgery to Conventional Open Heart Surgery.
                    </p>
                </div>

                {/* Right Section with Experience Info */}
                <div className='flex flex-wrap  justify-center lg:w-[50%]'>
                    <div className="flex flex-wrap gap-5 justify-center  "> {/* Allow flex-wrap to ensure items can wrap */}
                        {/* Each box with experience information */}
                        <div className="flex flex-col items-center w-64 gap-5 justify-center border border-gray-400 p-4 m-2"> {/* m-2 for margin spacing */}
                            <p className="text-5xl font-bold text-[#14B0EB]">12+</p>
                            <p className="text-xl font-semibold">Years Experience</p>
                        </div>

                        <div className="flex flex-col items-center ga4 w-64 justify-center border border-gray-400 p-4 m-2">
                            <p className="text-5xl font-bold text-[#14B0EB]">5000+</p>
                            <p className="text-xl font-semibold">Surgeries Done</p>
                        </div>


                    </div><div className="flex flex-wrap gap-5 justify-center  "> {/* Allow flex-wrap to ensure items can wrap */}
                        {/* Each box with experience information */}
                        <div className="flex flex-col items-center gap-5 w-64  justify-center border border-gray-400 p-4 m-2"> {/* m-2 for margin spacing */}
                            <p className="text-5xl font-bold text-[#14B0EB]">50000+</p>
                            <p className="text-xl font-semibold">Happy Patients</p>
                        </div>

                        <div className="flex flex-col items-center gap-5 w-64 justify-center border border-gray-400 p-4 m-2">
                            <p className="text-5xl font-bold text-[#14B0EB]">3000+</p>
                            <p className="text-xl font-semibold">MICS-Keyhole</p>
                        </div>


                    </div>
                </div>
            </div>

            <div className='bg-[#001e57] '>
                <h1 className='text-4xl pt-10 mb-10 font-bold text-center text-white '>Our Specialization</h1>
                <div className='lg:pl-36 lg:pr-36 flex flex-wrap justify-around gap-6'>
                    {/* First Card */}
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border border-black p-2  animate__animated animate__pulse'> {/* Added p-2 for padding */}
                            <img src={hp9} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Best Vascular Surgeon in Ahmedabad</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>At Plexus Heart Surgery Centre, we understand the profound impact heart health concerns can have on your life......</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>


                    {/* Second Card */}
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2 '> {/* Added p-2 for padding */}
                            <img src={hp8} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Heart Valve Surgeries</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>At Plexus Heart Surgery Centre, we understand the critical role healthy heart valves play in maintaining a well-functioning cardiovascular system.....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp7} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Minimally Invasive CABG</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>Traditionally, coronary artery bypass grafting (CABG) has involved open-heart surgery with a large incision through the chest.....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp6} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Mitral Valve Replacement</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>The mitral valve plays a vital role in ensuring smooth blood flow within the heart. When this valve malfunctions, it can significantly impact your heart's ability to pump blood efficiently....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp5} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Coronary Artery Bypass</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>Plexus Heart Surgery Centre is a leading cardiac care provider in Ahmedabad. It offers comprehensive treatment options for coronary artery disease, including coronary artery bypass surgery (CABG).....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp4} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>L.V. Aneurysms Operation</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>The left ventricle, your heart's main pumping chamber, can become weakened and bulge outward due to a condition called left ventricular aneurysm (LVA).....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp3} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Aortic root surgery (Aneurysms)</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>The aortic root, the very foundation of your aorta, plays a critical role in directing blood flow from your heart to the rest of your body.....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp2} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Coronary Endarterectomy</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>While bypass surgery has become a mainstay for treating blocked coronary arteries, there's another option for certain patients: coronary endarterectomy.....
                            Read more </p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-white border  animate__animated animate__pulse border-black p-2'> {/* Added p-2 for padding */}
                            <img src={hp1} alt='Vascular Surgeon' width={200} height={100} className=' border-black  border-[5px] h-[200px] ' />
                        </div>
                        <p className='text-xl text-white mt-3'>Myxoma</p>
                        <p className='text-[#14B0EB] lg:w-80 text-center mt-5'>While most heart conditions involve blockages or weakened muscles, myxomas present a unique challenge. These rare, non-cancerous tumors arise from the heart's connective tissue and can disrupt blood flow within the chambers....</p>
                        <p className='text-[#14B0EB]'>Read more</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center item-center "> {/* Main div with 50% width */}
                {/* Left Section with Text */}
                <div className="flex-1  w-[50%] bg-[#f3f5f9] p-8 lg:pl-32 lg:pr-32">
                    <p className="font-semibold text-4xl text-black mt-3">Our Expert Doctor</p>
                    <p className=' mt-5 text-blue-700 text-xl text-justify'>
                        Approach
                    </p>
                    <p className='text-gray-600 mt-5 text-justify'>
                        In the last 12+ years. Dr. Jaydip Ramani has successfully performed over 5,000 Minimal Invasive Keyhole Heart operations besides being associated with over 25,000 major cardiovascular procedures. This includes arterial coronary bypass graft surgery, Aortic / Mitral /Tricuspid valve repair & replacements, (MICAS) Beating heart surgery, Aortic root surgery, Aneurysm surgery, heart transplantation, heart tumor / Myxoma surgery, and other complex cardiac procedures.
                    </p>
                    <p className=' mt-5 text-[#14B0EB] text-md text-justify'>
                        READ MORE...
                    </p>
                </div>

                {/* Right Section with Experience Info */}
                <div className='flex flex-wrap  justify-center lg:w-[50%] '>
                    <div className="flex flex-wrap gap-5 justify-center p-3 "> {/* Allow flex-wrap to ensure items can wrap */}
                        <img src={doctor} alt='Vascular Surgeon' width={400} height={500} className=' border-[#14B0EB]  border-[8px] h-[400px]  animate__animated animate__fadeInUp ' />



                    </div>
                </div>
            </div>
            <div className='bg-[#001e57] p-24'>
                <h1 className='text-4xl  font-bold text-start text-white'>Latest Updates
                </h1>
            </div>

            <h1 className='text-5xl mt-10  font-bold text-center text-[#001e57] mb-10'>Our Patient's Feedback
            </h1>
        </>
    );
}

export default Home;
