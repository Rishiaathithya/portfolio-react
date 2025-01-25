import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-800'>
            <p className='text-violet-700 text-xl lg:text-4xl font-semibold text-center p-[1%] '>Rishi Aathithya CN</p>
            <div className="grid grid-cols-2 text-center lg:flex justify-center lg:p-[1%] lg:space-x-8 uppercase mb-[5%] lg:mb-[0]">
                <a
                    href="#about"
                    className="hover:text-gray-400 duration-300 my-[4%] lg:my-[0] xl-[0] text-white text-2xl"
                >
                    About Me
                </a>
                <a
                    href="#skill"
                    className="hover:text-gray-400 duration-300 my-[4%] lg:my-[0] xl-[0] text-white text-2xl "
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    className="hover:text-gray-400 duration-300 my-[4%] lg:my-[0] xl-[0] text-white text-2xl "
                >
                    Projects
                </a>
                <a
                    href="#Certification"
                    className="hover:text-gray-400 duration-300 my-[4%] lg:my-[0] xl-[0] text-white text-2xl "
                >
                    Certification
                </a>
            </div>
            <div className="flex justify-center gap-8 mb-[1%]">

                {/* Instagram Icon */}
                <a href="https://www.instagram.com/rishiaathithya/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-3xl text-pink-600 hover:text-pink-500 transition duration-300"></i>
                </a>

                {/* GitHub Icon */}
                <a href="https://github.com/Rishiaathithya" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github text-3xl text-black hover:text-gray-700 transition duration-300"></i>
                </a>

                {/* LinkedIn Icon */}
                <a href="www.linkedin.com/in/rishi-aathithya-88b823257" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin text-3xl text-blue-700 hover:text-blue-600 transition duration-300"></i>
                </a>

                {/* Twitter Icon */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter text-3xl text-blue-400 hover:text-blue-300 transition duration-300"></i>
                </a>

                {/* Facebook Icon */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square text-3xl text-blue-600 hover:text-blue-500 transition duration-300"></i>
                </a>
                
            </div>
            <div className="text-center py-4">
                <p className="text-gray-400 text-md">© 2024 Rishi Aathithya. All rights reserved.</p>
            </div>

        </div>

    )
}

export default Footer