import React, { useState } from 'react'
import Sidebar from "./Sidebar";  
import Main from "./Main";  
function Portfolio() {
  const [activeSection, setActiveSection] = useState(null);
    return (
    <div className='flex flex-col md:grid md:grid-cols-[40%_60%] max-w-7xl m-auto '>
      <Sidebar  setActiveSection={setActiveSection} activeSection={activeSection} />
       <Main  setActiveSection={setActiveSection} activeSection={activeSection} />
    </div>
  )
}

export default Portfolio