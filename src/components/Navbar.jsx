import React from 'react'

import logo from '../assets/manilogo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6' >
    <div className='flex flex-shrink-0 items-center'>
      <img className='w-10 invert mx-2' src={logo} alt="logo" />
    </div> 
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
       <a href="https://www.linkedin.com/in/manikanta-jammoju/"><FaLinkedin/></a> 
       <a href="https://github.com/mani978"><FaGithub/></a> 
      <a href="https://x.com/manie_codes?s=11&t=UKWwzbQb_9Gt142ZvCOxFQ"><FaSquareXTwitter/></a>  
     
     <a href="https://www.instagram.com/manie.codes?igsh=dDVuMHk2b3F4MHM="><FaInstagram/></a>   
    </div>
  </nav>
  )
}

export default Navbar