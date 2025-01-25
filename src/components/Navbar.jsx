import React from 'react';
import rishi from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="hidden lg:flex xl:flex sm:w-[100%] flex-row flex-wrap text-white justify-around  w-full h-[10%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-b-lg shadow-md z-10 ">
      <div className="logo ">
        <a href='#'>
          <img
            src={rishi}
            alt="Example"
            className="w-20 h-auto rounded-full shadow mt-[10%]"
          />
        </a>
      </div> 

      <div className="flex justify-evenly items-center text-xl gap-10">
        <ul className="px-4">
          <a href="#" className="hover:text-gray-300 font-semibold">
            HOME
          </a>
        </ul>
        <ul className="px-4">
          <a href="#about" className="hover:text-gray-300 font-semibold">
            ABOUT ME
          </a>
        </ul>
        <ul className="px-4">
          <a href="#skill" className="hover:text-gray-300 font-semibold">
            SKILLS
          </a>
        </ul>
        <ul className="px-4">
          <a href="#projects" className="hover:text-gray-300 font-semibold">
            PROJECTS
          </a>
        </ul>
        <ul className="px-4">
          <a href="contact" className="hover:text-gray-300 font-semibold">
            CONTACT ME
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
