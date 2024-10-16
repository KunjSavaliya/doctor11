import React, { useState } from 'react';
import img1 from '../../Images/bn1.jpg';
import img2 from '../../Images/bn2.jpg';
import img3 from '../../Images/bn3.jpg';
import hp1 from '../../Images/img.png';
import hp2 from '../../Images/img2.png';
import hp3 from '../../Images/img3.jpg';
import hp4 from '../../Images/img4.jpg';
import hp5 from '../../Images/img5.jpg';
import hp6 from '../../Images/img6.png';
import hp7 from '../../Images/img7.png';
import hp8 from '../../Images/img8.png';
import hp9 from '../../Images/img9.png';
import doctor from '../../Images/doctorImg.png';
import 'animate.css';

function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img2, img3, img1];
    const textContent = [
        "What We Treat?",
        "Our team treat all gynaecology conditions using the latest techniques.",
        "Dr. Jaydip Ramani is Top Minimal Invasive Heart Surgeon"
    ];

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
    const specializationCards = [
        { imgSrc: hp9, title: "Obstetrics (Maternity)", description: "The Obstetrics wing of Vaishnavi Maternity Home delivers around 2000 babies each year. We try to keep our primary cesarean rates below 20%" },
        { imgSrc: hp7, title: "Gynaec", description: "Vaginal hysterectomy, abdominal hysterectomy and all types of advanced laparoscopic surgeries are done at affordable cost with highest safety standards." },
        { imgSrc: hp6, title: "Neonatology", description: "Each baby after birth is seen by paediatrician and further follow up at yashonandan Hospital advised. we do not undertake any Vaccinations for Neonates. All critical babies requiring NICU we will be refered for critical care & management to yashonandan Hospital." },
        { imgSrc: hp5, title: "Anaesthesia", description: "The practice of obstetric anaesthesia is an emergency service we have around the clock availability of anaesthetist." },
        { imgSrc: hp4, title: "NST and Ultrasound", description: "Ultrasound plays a critical role in the treatment of reproductive system. It gives a clear perspective for perfect diagnosis to experts." },
        { imgSrc: hp3, title: "Pathology", description: "We though have a collection center, as we have been associated with SAATHI an NGO working in the field of HIV and AIDS we offer HIV testing in our hospital at free for antenatal mothers" },
        { imgSrc: hp2, title: "Basic Infertility Treatment", description: "There is nothing more frustrating thing in life than finding difficulty to conceive. Do not let this annoying predicament spoil your life." },
        { imgSrc: hp8, title: "Laparoscopic Surgery", description: "Laparoscopic surgery is the minimally invasive surgical procedure where the duration of hospitalization is the least and the recovery the fastest." },
        { imgSrc: hp1, title: "Family Planning", description: "When you do not want to extend the family further, you need specialized guidance about the right methods that are safe, reversible and effective." }
    ];

    return (
        <>
            <div className="relative w-full h-[400px] -mt-2 ">
                <img src={images[currentImage]} alt="carousel" className="w-full h-full object-cover" />
                <div className=" flex
                 flex-col gap-10 absolute top-0 left-0 p-5 text-white">
                    <h2 className=" text-3xl lg:text-5xl font-bold lg:pl-36 lg:mt-16    animate__animated animate__fadeInDown">{textContent[currentImage]}</h2>
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
            <div className="flex flex-wrap ">
                <div className="flex-1  w-[50%] bg-[#f3f5f9] p-8 lg:pl-32 lg:pr-32">
                    <p className="font-normal text-gray-500">Welcome to Tashree Maternity Home</p>
                    <p className="font-semibold text-4xl text-[#0000ff] mt-3 text-start">A Few Words about Tashree Women's Hospital</p>
                    <p className='text-gray-600 mt-5 text-justify'>
                        Tashree  Hospital is a leading women's health care facility in the Rajkot, dedicated to providing high-quality gynecological and obstetric care to women of all ages. Our team of skilled and experienced gynecologists, obstetricians, and fertility experts work together to provide a comprehensive range of services, from routine check-ups to advanced medical treatments.
                    </p>
                    <p className='text-gray-600 mt-5 text-justify'>
                        We understand that women's health care needs are unique and can vary at different stages of life. That's why we offer a range of specialized services tailored to meet the specific needs of our patients. Whether you require routine gynecological care, prenatal care, infertility treatment, or gynecological surgery, our team is here to provide you with the highest level of care.

                    </p>



                </div>

                <div className='flex flex-wrap  justify-center lg:w-[50%]'>
                    <div className="flex flex-wrap gap-5 justify-center  ">
                        <div className="flex flex-col items-center w-64 gap-5 justify-center border border-gray-400 p-4 m-2">
                            <p className="text-5xl font-bold text-[#14B0EB]">12+</p>
                            <p className="text-xl font-semibold">Years Experience</p>
                        </div>

                        <div className="flex flex-col items-center ga4 w-64 justify-center border border-gray-400 p-4 m-2">
                            <p className="text-5xl font-bold text-[#14B0EB]">5000+</p>
                            <p className="text-xl font-semibold">Surgeries Done</p>
                        </div>
                    </div><div className="flex flex-wrap gap-5 justify-center  ">
                        <div className="flex flex-col items-center gap-5 w-64  justify-center border border-gray-400 p-4 m-2">
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
            <div className="flex-1  p-8 lg:pl-32 lg:pr-32">

                <p className='text-gray-600 mt-5 text-justify'>
                    At Tashree Hospital, we are committed to providing a safe, comfortable, and compassionate environment for all our patients. Our state-of-the-art facilities are equipped with the latest medical technology, ensuring accurate diagnosis and treatment. Our team of doctors, nurses, and support staff work together to provide personalized care to each patient, ensuring that you receive the best possible treatment and support.
                </p>
                <p className='text-gray-600 mt-5 text-justify'>
                    We are proud to serve the women of Rajkot and surrounding areas, and we strive to ensure that our patients receive the best possible care.
                </p>
                <p className='text-gray-600 mt-5 text-justify font-bold'>
                    We invite you to visit us at Tashree Hospital Rajkot and experience our commitment to women's health care firsthand.
                </p>
            </div>
            <div className='bg-[#001e57] '>
                <h1 className='text-4xl pt-10 mb-10 font-bold text-center text-white '>Our Specialization</h1>
                <div className='lg:pl-28 lg:pr-28 flex flex-wrap justify-around gap-3'>
                    {specializationCards?.map((card, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <div className='bg-white border animate__animated animate__pulse border-black p-2'>
                                <img src={card.imgSrc} alt={card.title} width={200} height={100} className='border-black border-[5px] h-[200px]' />
                            </div>
                            <p className='text-xl text-white mt-3 text-center' >{card.title}</p>
                            <p className='text-[#14B0EB] sm:w-80  text-center mt-5 p-1'>{card.description}</p>
                            <p className='text-[#14B0EB] text-center w-full'>Read more</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center item-center ">
                <div className="flex-1  w-[50%] bg-[#f3f5f9] p-8 lg:pl-32 lg:pr-32">
                    <p className="font-semibold text-4xl text-black mt-3">Our Expert Doctor</p>
                    <p className=' mt-5 text-blue-700 text-xl text-justify'>
                        Approach
                    </p>
                    <hr className='border-t-2 border-[#14B0EB] w-20  mt-4' />
                    <p className='text-gray-600 mt-5 text-justify'>
                        In the last 12+ years. Dr. Jaydip Ramani has successfully performed over 5,000 Minimal Invasive Keyhole Heart operations besides being associated with over 25,000 major cardiovascular procedures. This includes arterial coronary bypass graft surgery, Aortic / Mitral /Tricuspid valve repair & replacements, (MICAS) Beating heart surgery, Aortic root surgery, Aneurysm surgery, heart transplantation, heart tumor / Myxoma surgery, and other complex cardiac procedures.
                    </p>
                    <p className=' mt-5 text-[#14B0EB] text-md text-justify'>
                        READ MORE...
                    </p>
                </div>
                <div className='flex flex-wrap  justify-center lg:w-[50%] '>
                    <div className="flex flex-wrap gap-5 justify-center p-3 ">
                        <img src={doctor} alt='Vascular Surgeon' width={400} height={500} className=' border-[#14B0EB]  border-[8px] h-[400px]  animate__animated animate__fadeInUp ' />
                    </div>
                </div>
            </div>
            <div className='bg-[#001e57] p-24'>
                <h1 className='text-4xl  font-bold text-start text-white'>Latest Updates
                </h1>
                <hr className='border-t-2 border-[#14B0EB] w-36  mt-4' />

            </div>
            <h1 className='text-5xl mt-20     font-bold text-center text-[#001e57] mb-20'>Our Patient's Feedback
                <hr className='border-t-2 border-[#14B0EB] w-20 mx-auto  mt-4' />
            </h1>

        </>
    );
}

export default Home;
