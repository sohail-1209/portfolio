import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
  return (
    <nav className='flex justify-around py-5'>
      <img width={180} src="https://sdhub.in/wp-content/uploads/2024/05/cropped-Skills-Development-Hub-SM-Logos-2.png" alt="" />
       <div className='flex py-5 gap-10 [&>Link]:text-sm items-center'>
        <Link className='text-sm font-medium' to="/">HOME</Link>
        <Link className='text-sm font-medium' to="/Contact">ABOUT US </Link>
        <Link className='text-sm font-medium' to="/About">COURSES</Link>
        <Link  className='text-sm font-medium' to="/reg">REGISTRATION FORM</Link>
        <button className='text-blue-600  border p-2 rounded-l text-sm font-medium'>CONTACT US</button>
       </div>
        
    </nav>
  )
}

export default Navbar