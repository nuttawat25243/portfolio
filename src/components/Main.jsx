import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLine } from '@fortawesome/free-brands-svg-icons';
import img1 from '../img/pohs.png';
import img2 from '../img/port.png';
function Main({ activeSection }) {
  let aboutSection = '';
  let projectSection = '';
  let contactSection = '';

  if (activeSection === 'About') {
    aboutSection = 'pr-10';
  } else if (activeSection === 'Project') {
    projectSection = 'pr-10';
  } else if (activeSection === 'Contact') {
    contactSection = 'pr-10';
  }

  return (
    <div className='text-white font-pops px-8'>
          <div className='mt-8 mb-16 md:px-2 ' >
            <div className='flex items-center'>
             <span class={`bg-white h-[1px] inline-block duration-500 ease-out  mr-1 ${aboutSection}`}></span>
              <h1 id="About" >About</h1>
            </div>
            <p  className='text-gray-300 text-sm mt-5 font-light'>I'm 23 years old, and I recently graduated with a degree in electrical engineering from KMUTT. However, upon graduating,
             I felt the need to explore something different that appealed to me more. After some research, I discovered that front-end development might be a job that interests me, 
             so I decided to start working on some projects. As a result, I found that I enjoy this line of work and the lifestyle it offers.
            Currently, I am taking my journey into web development more seriously, with a specific focus on becoming a front-end developer.
             My future goal is to become a full-stack developer.</p>
          </div>
          <div className='mb-12' >
            <div className='flex items-center'>
             <span class={`bg-white h-[1px] inline-block duration-500 ease-out  mr-1 ${projectSection}`}></span>
              <h1 id="Project" className='md:px-2 '>Project</h1>
            </div>
            <a className='flex flex-col  md:grid  md:grid-cols-[25%_75%] mt-4 hover:bg-gray-800 rounded-md  p-2 cursor-pointer ' target="_blank" href="https://pohs-ecommerce-react.web.app/">  
            <div>
                    <h3 className='text-gray-500 text-base'>Sep 2023</h3>
                    <span ><img className='pb-4 md:pb-0 md:w-5/6   mt-6 rounded-md' src={img1} alt="" /></span>
              </div>
              <div>
                   <h3 className=' text-base'>Front-End · React-ECommerce</h3>
                   <a href=""><FontAwesomeIcon size='xl mr-4 mt-5 '  icon={faGithub} /></a>
                   <p className='text-base text-gray-500 mt-5'>The POHS eCommerce project utilizes React.js to build a functional eCommerce platform, resulting in an improvement of my React skills. Moreover, it has provided me with more skills to use Strapi for API development and Redux for efficient state management.
                    </p>
                   <div className='flex flex-wrap mt-5'>
                   <span className='bg-gray-900 p-1 md:px-2 m-1 rounded-lg '>React</span>
                   <span className='bg-gray-900 p-1 md:px-2 m-1 rounded-lg'>TailwindCSS</span>
                   <span className='bg-gray-900 p-1 md:px-2 m-1 rounded-lg'>Redux</span>
                   <span className='bg-gray-900 p-1 md:px-2 m-1 rounded-lg'>Strapi</span>
                   </div>
              </div>
            </a>
            
            <div className='flex flex-col  md:grid  md:grid-cols-[25%_75%] mt-4 hover:bg-gray-800 rounded-md  p-2'>
              <div>
                    <h3 className='text-gray-500 text-base'>Oct 2023</h3>
                    <span ><img className='pb-4 md:pb-0 md:w-5/6   mt-6 rounded-md' src={img2} alt="" /></span>
              </div>
              <div>
                   <h3 className=' text-base'>Front-End · Portfolio</h3>
                   <a href=""><FontAwesomeIcon size='xl mr-4 mt-5 '  icon={faGithub} /></a>
                   <p className='text-base text-gray-500 mt-5'>In this project, I created a portfolio with React.js and Tailwind CSS to showcase my skills and my journey.</p>
                   <div className='flex flex-wrap mt-5'>
                   <span className='bg-gray-900 p-1 md:px-2 m-1 rounded-lg '>React</span>
                   <span className='bg-gray-900 p-1 md:px-2 m-1 rounded-lg'>TailwindCSS</span>
                   </div>
              </div>
            </div>
          </div>
          <div className='px-1 md:px-2 pb-0'>
            <div className='flex items-center'>
              <span class={`bg-white h-[1px] inline-block duration-500 ease-out  mr-1 ${contactSection}`}></span>
              <h1 id="Contact">Contact</h1>
            </div>
            <div className='flex flex-col mt-5 gap-y-5'>
             <p className='text-sm font-light  text-'>Email : nuttawatsaepan@gmail.com</p>
             <p className='text-sm font-light  text-'>Tel : 096-649-5414</p>
             <p className='text-sm font-light  text-'>Location : Bangkok, Thailand</p>
             <span className=''>
                 <a href="https://github.com/nuttawat25243" target="_blank"><FontAwesomeIcon size='xl mr-4 '  icon={faGithub} /></a>
                 <a href="https://line.me/ti/p/urJCj71aoG" target="_blank"><FontAwesomeIcon size='xl' icon={faLine} /></a>
             </span>
             <p className='text-sm font-light  text-gray-500 text-right mt-24'>Powered by React.js and TailwindCSS
             <a href=""><FontAwesomeIcon size='xl mx-4'  icon={faGithub} /></a>
              </p>
             
             </div>
          </div>
    </div>
  )
}

export default Main