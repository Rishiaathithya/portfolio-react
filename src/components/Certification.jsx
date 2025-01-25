import React from 'react'
import tcs from '../assets/TCS.png';
import udemy from '../assets/udemy-logo-share.png';
import aws from '../assets/aws.png';
import Coursera from '../assets/Coursera-Logo.png';
import cisco from '../assets/cisco.png';
import goldman from '../assets/goldman-sachs.png'
import oracle from '../assets/oracle images.png';
import zcaler from '../assets/zsclaer.png';


const Certification = () => {
    return (
        <div className=' '>
            <div className='head text-center text-white pt-[5%] mb-[5%]' id="Certification">
                <h1 className='text-5xl font-semibold mb-8'>CERTIFICATION</h1>
                <span className='block bg-cyan-500 mt-4 mb-4 w-8 h-1 mx-auto '></span>
            </div>
            <div className='min-h-screen mx-[10%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8'>                
                <div className='testing flex flex-col flex-wrap  m-[5%] rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] lg:flex-row xl:h-[50%] xl:flex-row' >
                    <img src={aws} alt='#'      className='h-16 w-15 rounded-xl' />
                        <a href="https://drive.google.com/file/d/1kQVj_g8gjfjxA1GoooB_bKl-AIUQbtUH/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer" ><p classname=''>Devops With Aws</p></a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={aws} alt='#'      className='h-16 w-15 rounded-xl' />
                        <a href="https://drive.google.com/file/d/1migQWCqPxozRLzr1rYWiIyTvTi6ahx3E/view?usp=drive_link" alt="image" target='_blank' rel="noreferrer"></a><p classname=''>AWS Frameworks</p>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={goldman} alt='#'  className='h-14 w-13 rounded-xl' />
                    <a href="" alt="images" target='_blank' rel="noreferrer"><p classname=''>Software <br></br>Engineering</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={oracle} alt='#'   className='h-14 w-13 rounded-xl' />
                    <a href="https://drive.google.com/file/d/18D1w9Di6-CeiDq1GrSU4kYTJY20JZdA9/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>DBMS and SQL</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={cisco} alt='#'    className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/1zktWEnGop8JjiXXTpckrxSbWhqAYIe8o/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>Cybersecurity</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={cisco} alt='#'    className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/1JrMqOZNvRh0wMc1VwHzyFnWmRJ4WZDNK/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>Data Analytics</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={zcaler} alt='#'   className='h-16 w-15 rounded-lg' />
                    <a href="https://drive.google.com/file/d/1ceA0oRxjaiPMv4LBThe9cq6kTEH2-Wxa/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>Networking <br/> Fundamentals </p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={tcs} alt='#'      className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/1HJ86rBKAz1bW4r7CIITXbxgN1hAI8ZGn/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"> <p classname=''>Soft Skills</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={Coursera} alt='#' className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/1B-5BKub0Z2B0DhA-4XoMP1OX9dKV90ax/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>Data Science<br/> Foundations</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={udemy} alt='#'    className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/15Zc84LZNEOxgJk4RnnAiIr8tfTIdbnwz/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>AWS Fundamentals</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={udemy} alt='#'    className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/1I7OS1tqc9WyaUtjPfb9pkQgYad2bhrVy/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>Web Development</p> </a>
                </div>
                <div className='testing flex flex-col flex-wrap m-[5%]  rounded-2xl justify-evenly items-center border-2  bg-gray-800 text-white text-lg hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-900 hover:border-blue-500 sm:h-[50%] w-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] lg:flex-row xl:flex-row' >
                    <img src={udemy} alt='#'    className='h-16 w-15 rounded-xl' />
                    <a href="https://drive.google.com/file/d/13qx5j3MasDgLGyI1a7BlDTgTcyKok_XH/view?usp=drive_link" alt="images" target='_blank' rel="noreferrer"><p classname=''>AWS Solution <br/>Architect</p> </a>
                </div>
            </div>
        </div>
    )
}

export default Certification