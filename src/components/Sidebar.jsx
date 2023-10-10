import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
import img1 from '../img/html.png';
import img2 from '../img/css.png';
import img3 from '../img/js.png';
import img4 from '../img/react.png';
import img5 from '../img/tw.png';


function Sidebar({activeSection,setActiveSection }) {
    const nav = [
        {id:1 , title:"About"},
        {id:2 , title:"Project"},
        {id:3 , title:"Contact"},
    ];

    const handleClickid = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      };
  
    return (
     <div className='flex flex-col md:grid  md:grid-rows-[35%_40%_25%] md:h-screen bg-black text-white font-pops  md:sticky md:top-0   '>
         <div className='flex flex-col gap-5 m-8   '>
             <h1 className='text-3xl text-cyan-500'>Nuttawat Saepan</h1>
             <h2 className='text-lg '>New Graduate · Interested in Front-End Developer</h2>
             <p className='text-gray-300 text-sm'>Hi, I'm Nuttawat Saepan. Now I'm 23 years old. I graduated in Electrical Engineering but I am interested in being a Front-End Developer.</p>
             <div className='flex gap-4'>
             <a href='https://drive.google.com/drive/folders/1NhIKEpuMkmy_wryLUNcVi3ojGZM6YR1g' target="_blank"  className='text-left text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg w-max px-4 py-2'> <FontAwesomeIcon icon={faArrowRight} beatFade style={{color: "#ffffff",}} /> Resume</a>
             </div>
         </div>
         <ul className=' flex flex-col hidden md:flex gap-4 m-8 text-base'>
        {nav.map((e, i) => (
          <li key={e.id}   className={`cursor-pointer ${activeSection === e.title ? 'active' : ''}`}
          onClick={() => handleClickid(e.title)}>
            <FontAwesomeIcon icon={faArrowRight}  className={`pr-1 ${activeSection === e.title ? ' ' : 'hidden'}`} style={{ color: "#3ac3df" }} />{e.title}
          </li>
        ))}
      </ul>
         <div className='gap-4 hidden md:block m-8 mb-0'>
              <h2 className='underline  w-max '>Tech Stack</h2>
              <ul className=' flex mt-4'>
              <li><img className='w-10 h-10 m-3  rounded -center' src={img1} alt="" /><p className='text-xs text-center'>HTML</p></li>
              <li><img className='w-10 h-10 m-3  rounded'  src={img2} alt="" /><p className='text-xs text-center'>CSS</p></li>
              <li><img className='w-10 h-10 m-3  rounded'  src={img3} alt="" /><p className='text-xs text-center'>JS</p></li>
              <li><img className='w-10 h-10 m-3   rounded' src={img4} alt="" /><p className='text-xs text-center'>REACT</p></li>
              <li><img className='w-10 h-10 m-3  rounded'  src={img5} alt="" /><p className='text-xs text-center'>TAILWIND</p></li>
            </ul>
         </div>
         
     </div>
  )
}

export default Sidebar