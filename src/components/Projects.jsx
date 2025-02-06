import React from 'react'
import terraformimg from '../assets/terraform.png'
import netflix from '../assets/netflix-app.png'
import spotify from '../assets/spotify-terraform.png'
import portfolio from '../assets/React-app.png'
import kubernates from '../assets/kubernates-app.png'
import tier from '../assets/3-tier-app.png'

const Projects = () => {
  return (
    <section className=' text-white pt-[1%] mb-[10%]' id='projects'>
      <div className='text-center '>
        <h1 className='text-6xl font-semibold mb-8'>PROJECTS</h1>
        <span className='block bg-cyan-500 mt-4 mb-4 w-8 h-1 mx-auto '></span>
      </div>
      <p className='text-center mt-[1%] text-lg'>I have worked on diverse DevOps projects, including automation, CI/CD, cloud deployments, and monitoring solutions.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-[15%]  mt-[3%]'>
        <div className=' testing component-1 m-[5%] border-2 border-gray-700 rounded-2xl bg-gray-900 flex flex-col p-[5%] hover:bg-transparent transform transition-transform hover:-translate-y-4 duration-500'>
          <img src={terraformimg} alt="" className='rounded-2xl'></img>
          <div className='tools-box flex text-violet-700 gap-x-6  m-[4%]'>
            <div className='rounded-3xl  flex  items-center text-sm lg:text-md '>docker</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>kubernates</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>jenkins</div>
          </div>
          <div className='text-box'>
            <h1 className='text-lg'>Terraform Initailaztion</h1>
            <p className='text-gray-500'>Jun 2024 - Feb 2025</p>
            <p>This is the paragraph about the checking for the description for the Projects</p>
          </div>
        </div>
        <div className=' testing component-1 m-[5%] border-2 border-gray-700 rounded-2xl bg-gray-900 flex flex-col p-[5%] hover:bg-transparent transform transition-transform hover:-translate-y-4 duration-500'>
          <img src={spotify} alt="" className='rounded-2xl'></img>
          <div className='tools-box flex text-violet-700 gap-x-4 m-[4%]'>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>docker</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>kubernates</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>jenkins</div>
          </div>
          <div className='text-box'>
            <h1 className='text-lg'>Spotify Terraform</h1>
            <p className='text-gray-500'>Jun 2024 - Feb 2025</p>
            <p>This is the paragraph about the checking for the description for the Projects</p>
          </div>
        </div>
        <div className=' testing component-1 m-[5%] border-2 border-gray-700 rounded-2xl bg-gray-900 flex flex-col p-[5%] hover:bg-transparent transform transition-transform hover:-translate-y-4 duration-500'>
          <img src={netflix} alt="" className='rounded-2xl'></img>
          <div className='tools-box flex text-violet-700 gap-x-4 m-[4%]'>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>docker</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>kubernates</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>jenkins</div>
          </div>
          <div className='text-box'>
            <h1 className='text-lg'>Netflix Deployment</h1>
            <p className='text-gray-500'>Jun 2024 - Feb 2025</p>
            <p>This is the paragraph about the checking for the description for the Projects</p>
          </div>
        </div>
        <div className=' testing component-1 m-[5%] border-2 border-gray-700 rounded-2xl bg-gray-900 flex flex-col p-[5%] hover:bg-transparent transform transition-transform hover:-translate-y-4 duration-500'>
          <img src={portfolio} alt="" className='rounded-2xl'></img>
          <div className='tools-box flex text-violet-700 gap-x-4 m-[4%]'>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>docker</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>kubernates</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>jenkins</div>
          </div>
          <div className='text-box'>
            <h1 className='text-lg'>React App</h1>
            <p className='text-gray-500'>Jun 2024 - Feb 2025</p>
            <p>This is the paragraph about the checking for the description for the Projects</p>
          </div>
        </div>
        <div className=' testing component-1 m-[5%] border-2 border-gray-700 rounded-2xl bg-gray-900 flex flex-col p-[5%] hover:bg-transparent transform transition-transform hover:-translate-y-4 duration-500'>
          <img src={tier} alt="" className='rounded-2xl'></img>
          <div className='tools-box flex text-violet-700 gap-x-4 m-[4%]'>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>docker</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>kubernates</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>jenkins</div>
          </div>
          <div className='text-box'>
            <h1 className='text-lg'>3-Tier Web Application</h1>
            <p className='text-gray-500'>Jun 2024 - Feb 2025</p>
            <p>This is the paragraph about the checking for the description for the Projects</p>
          </div>
        </div>
        <div className=' testing component-1 m-[5%] border-2 border-gray-700 rounded-2xl bg-gray-900 flex flex-col p-[5%] hover:bg-transparent transform transition-transform hover:-translate-y-4 duration-500'>
          <img src={kubernates} alt="" className='rounded-2xl'></img>
          <div className='tools-box flex text-violet-700 gap-x-4 m-[4%]'>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>docker</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>kubernates</div>
            <div className='rounded-2xl  flex  items-center text-sm lg:text-md '>jenkins</div>
          </div>
          <div className='text-box'>
            <h1 className='text-lg'>Kubernates Deployment</h1>
            <p className='text-gray-500'>Jun 2024 - Feb 2025</p>
            <p>This is the paragraph about the checking for the description for the Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects