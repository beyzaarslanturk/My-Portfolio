import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"

import { links } from "../datas"

function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <div className='h-[15vh] bg-lime-800 text-white flex items-center justify-between px-7 w-full border-b border-white'>

           

            <div className='hidden md:flex'>
                {links.map(link => (
                    <NavLink key={link.id} to={link.link} className={({ isActive }) => isActive ? "active navlink" : "navlink"} >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            <div className="md:hidden cursor-pointer z-50 text-white" onClick={() => setShowNavbar(!showNavbar)}>
                {showNavbar ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {showNavbar && 
            <div className=' z-10 flex flex-col absolute justify-center items-center top-0 left-0 w-full h-screen text-black bg-gradient-to-b from-bg-lime-950 to-lime-500 '>
                {links.map(link => (
                    <Link onClick={() => setShowNavbar(false)} key={link.id} to={link.link} className="py-2 font-medium hover:bg-lime-700 flex items-center justify-center text-white bg-lime-900 w-screen text-center text-lg cursor-pointer border-b h-[100%] ">
                        {link.name}
                    </Link>
                ))}
            </div>}

        </div>
    )
}

export default Navbar