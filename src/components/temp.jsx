import React from 'react'

const Temp = () => {
    return (
        <section className='min-h-screen text-white pt-[2%] mb-[5%]' id="about">
            <div className='lg:text-center xl:text-center mb-20 m-auto'>
                <h1 className='text-6xl mb-8 font-semibold text-center'>ABOUT ME</h1>
                <span className='block w-8 h-1 bg-cyan-500 mt-1 mx-auto mb-4'></span>
                <p className='text-lg md:text-xl mx-[4%] lg:text-center xl:text-center'>Here you will find more information about me, what I do, and
                    my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='grid grid-cols-1 gap-30 mx-[10%] lg:grid-cols-2 xl:grid-cols-2'>
                <div className='px-0 lg:px-[5%] xl:px-[5%]  mb-[10%] lg:mb-[0%] xl:mb-[0%]'>
                    <h3 className=' text-4xl mb-8 '>Get To Know me!</h3>
                    <div className='text-lg '> I'm a DevOps engineer and web developer focused on building and managing web
                        applications and automating deployments.I strive to ensure smooth and efficient
                        operations, driving product success.
                        <br /> <br />
                        Check out some of my projects in the Projects
                        section.I enjoy sharing knowledge on DevOps, web development, and programming
                        through content that helps others in the developer community .Feel free to connect or
                        follow me on LinkedIn and Instagram, where I share useful insights.
                        <br /> <br />
                        I'm open to job opportunities where I can contribute, learn, and grow. If you have a great opportunity
                        that aligns with my skills, don't hesitate to contact me.<br></br>
                        <a href="#about-me" className=" mt-12 inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-4xl mt-2 uppercase text-center sm:text-left'>Education</h1>
                    <div className='mt-8'>
                        <h1 className='text-4xl uppercase'>School :</h1>
                        <div className=' ml-[8%] px-4'>
                            <p className=' mt-4 text-xl'>X</p>
                            <p className=' mt-4 text-xl uppercase'>Seventh Day  Matriculation Higher Secondary School - 85%</p>
                        </div>
                        <div className=' ml-[8%] px-4 mt-8'>
                            <p className=' mt-4 text-xl'>XII </p>
                            <p className=' mt-4 text-xl uppercase'>Seventh Day  Matriculation Higher Secondary School - 84%</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h1 className='text-4xl mt-2 uppercase'>College :</h1>
                        <div className=' ml-[8%]  px-4'>
                            <p className='mt-4 text-2xl uppercase'>Chennai Institue of Technology</p>
                            <p className=' text-xl'>Bachelor of Technology in Information Technology - 8.52 CGPA</p></div>
                    </div>
                    <a href="https://drive.google.com/uc?export=download&id=1vRi8EQ_ZZPS_Km_wno8vgxApGCpUVfSZ" className=" mt-8 inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600">
                        Download Resume
                    </a>
                </div>
            </div>

        </section >
    )
}

export default Temp