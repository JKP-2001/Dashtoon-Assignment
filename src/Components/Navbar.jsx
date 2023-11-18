import React from 'react'

import logo from "../Images/749815-200.png"
import { easeOut, motion } from "framer-motion";
import { DrawerDefault } from './Drawer';
// import { IconButton } from "@material-tailwind/react";
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const click = () => {
        window.open('https://github.com/JKP-2001/Dashtoon-Assignment', '_blank');
    }


    return (

        <div 
         className="flex overflow-hidden bg-white h-[80px] px-1 sm:px-16 justify-center  items-center justify-between border-b-[1px] border-gray-300 shadow-lg">
            <motion.div 
            className='flex transition delay-150 hover:scale-110 hover:cursor-pointer  items-center'>
                <img src={logo} className='w-14 h-14' alt="" />
                <div className=' ml-2 text-2xl font-extrabold  items-center font-custom'>
                    ImagiCraft AI
                </div>
            </motion.div>

            <motion.div animate={{ x: 0,opacity:1}} initial={{ x: 300,opacity:0 }} transition={{ duration: 1 }}
            className='flex items-center justify-between space-x-7'>

                <button class="transition delay-150 duration-300 ease-in-out bg-blue-700 text-sm sm:text-base px-2 py-2 rounded-md text-white hover:scale-110 font-Button " onClick={click}>Project Repo</button>
            </motion.div>

            {/* <FormatAlignJustifyIcon /> */}
            
        </div>
    )
}

export default Navbar