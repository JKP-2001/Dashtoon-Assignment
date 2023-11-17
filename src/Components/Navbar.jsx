import React from 'react'

import logo from "../Images/749815-200.png"
import { easeOut, motion } from "framer-motion";
import { DrawerDefault } from './Drawer';

const Navbar = () => {
    return (

        <div 
         className="flex bg-white h-[80px] px-4 sm:px-16 justify-center  items-center sm:justify-between border-b-[1px] border-gray-300 shadow-lg">
            <motion.div 
            className='flex transition delay-150 hover:scale-110 hover:cursor-pointer  items-center'>
                <img src={logo} className='w-14 h-14' alt="" />
                <div className=' ml-2 text-2xl font-extrabold  items-center font-custom'>
                    ImagiCraft AI
                </div>
            </motion.div>

            <motion.div animate={{ x: 0,opacity:1}} initial={{ x: 300,opacity:0 }} transition={{ duration: 1 }}
            className='hidden sm:flex items-center justify-between space-x-7'>
                <button class="transition delay-150 duration-300 ease-in-out bg-blue-700 py-2 px-4 rounded-md text-white 
                hover:scale-110 font-Button ">Login</button>

                <button class="transition delay-150 duration-300 ease-in-out bg-blue-700 py-2 px-4 rounded-md text-white hover:scale-110 font-Button ">Project Repo</button>
            </motion.div>
            
        </div>
    )
}

export default Navbar