import React, { useState } from 'react'

import { motion } from "framer-motion";
import SearchBar from './SearchBar';
import TextForm from './TextForm';
import { useSelector } from 'react-redux';

const TopText = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    

    return (
        <div className='overflow-hidden'>
            <motion.div 
                className='pb-10 bg-back2 w-full  h-[615px]  transition-all duration-500 ease-in-out transform bg-center bg-cover min-h-[400px] hover:scale-[1.01]'>

                <div className="entry_message mx-10 pt-16 sm:pt-28 ">

                    <div className='text-4xl sm:text-5xl text-center font-handwritten2 text-white'>
                        Welcome to AI Image Generator,
                    </div>
                    <div className='text-4xl sm:text-5xl text-center font-handwritten2 text-white'>
                        where creativity meets artificial intelligence!
                    </div>

                    <div className='text-center  text-white sm:mx-24 md:mx-36 xl:mx-64  mt-6  font-handwritten2'>
                        Unleash the power of cutting-edge technology to transform your ideas into stunning visuals. Our user-friendly platform seamlessly merges the world of art and artificial intelligence to bring your imagination to life.
                    </div>

                </div>
                <div className='w-full text-center mt-20'>
                    <TextForm open={open} setOpen={setOpen} handleOpen={handleOpen} />
                </div>
            </motion.div>

        </div>
    )
}

export default TopText