import React from 'react'
import { Logo , Decore} from '../assets/assest.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div >
            <div  className='flex justify-around'>
                {/* 🔹 Logo */}
                <div>
                    <img
                        className=''
                        src={Logo}
                        alt="Logo"
                    />
                </div>

                {/* 🔹 Menu Links + Language Dropdown */}
                <div
                 className='flex items-center gap-20'>
                    <Link className='h-[22px] w-[100px] hover:text-blue-500 transition'>Destination</Link>
                    <Link className='hover:text-blue-500 transition'>Hotel</Link>
                    <Link className='hover:text-blue-500 transition'>Flight</Link>
                    <Link className='hover:text-blue-500 transition'>Booking</Link>
                    <Link className='hover:text-blue-500 transition'>Login</Link>
                    <Link className='hover:text-blue-500 transition'>Signup</Link>

                    {/* 🌐 Language Dropdown */}
                    <select
                        className='ml-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 bg-white'
                        defaultValue="en"
                    >
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar
