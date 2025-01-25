import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <header className="bg-cover bg-center  pt-[50%] lg:pt-[13%] xl:pt-[13%] " id='header'>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold  py-10 tracking-wider">HELLO , I'M RISHI AATHITHYA CN</h1>
          <p className="text-xl md:text-2xl mb-8  ">
            A results-driven DevOps engineer and web developer,automating deployments  <br></br> creating responsive web applications to drive product success.</p>
            <a href="#about" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600">
              Know About Me
            </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
