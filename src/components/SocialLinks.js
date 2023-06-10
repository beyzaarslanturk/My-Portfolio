import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"

function SocialLinks() {
        return (
            <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
                <ul>
                    <li className='rounded-tr-md flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-lime-700'>
                        <a href="https://www.linkedin.com/in/beyzaarslanturk/" rel='noopener noreferrer' target="_blank" className='flex justify-between items-center w-full text-white'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-lime-700'>
                        <a href="https://github.com/beyzaarslanturk" rel='noopener noreferrer' target="_blank" className='flex justify-between items-center w-full text-white'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-lime-700'>
                        <a href="mailto:beyzarslanturk@gmail.com" className='flex justify-between items-center w-full text-white'>
                            Gmail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    
                </ul>
            </div>
        )
    }

export default SocialLinks