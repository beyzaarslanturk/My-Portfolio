import React from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { GoLocation } from "react-icons/go"
import { BsFillTelephoneFill } from "react-icons/bs"

function Contact() {
    return (
        <div className='bg-gradient-to-b from-lime-800 to-lime-950 min-h-[85vh] text-white w-full'>
            <div className='flex flex-col items-center justify-center h-[85vh]'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4 shadow-md shadow-white px-2 py-2 rounded-md'>
                        <BsFillTelephoneFill size={30} />
                        <p className='text-lg'>+90 531 305 89 45</p>
                    </div>
                    <div className='flex flex-start items-center gap-4 shadow-md shadow-white px-2 py-2 rounded-md'>
                        <HiOutlineMail size={30} />
                        <p>beyzarslanturk@gmail.com</p>
                    </div>
                    <div className='flex flex-start items-center gap-4 shadow-md shadow-white px-2 py-2 rounded-md'>
                        <GoLocation size={30} />
                        <p>İstanbul / Esenyurt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact