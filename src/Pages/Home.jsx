import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Images from '../Components/Images'
import { useSelector } from 'react-redux'

import { motion } from "framer-motion";
import Drawer from '../Components/Drawer'
import TopText from '../Components/TopText'

import img1 from "../Images/Static/1.png"
// import img2 from "../Images/Static/2.jpg"
// import img3 from "../Images/Static/3.jpg"
// import img4 from "../Images/Static/4.png"
import img5 from "../Images/Static/5.png"
import img6 from "../Images/Static/6.jpg"



const Home = () => {

  const imageState = useSelector((state) => state.image);

  return (
    <>


      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 3 }} transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 }
        }} className='overflow-hidden'>
        <div className="navbar overflow-hidden">
          <Navbar />
        </div>

        <div>
          <TopText />
        </div>

        {imageState.data.length>0?<div>
          <div className='w-screen text-center font-bold text-2xl px-2 sm:text-4xl text-white font-handwritten2 pt-7' >
            Your Comic
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:mx-16 pt-16 pb-7">
            {imageState.data.map((url, i) => {
              return <Images imgurl={url} key={i} />
            })}

          </div>
            </div>
        :null}
        

          {/* Static Images */}

        <div className='w-screen text-center font-bold text-2xl px-2 sm:text-4xl text-white font-handwritten2 pt-10' >
          Dive into a World of Inspiration 
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:mx-16 pt-8 pb-7">

          <Images imgurl={img1} />
          <Images imgurl={img5} />
         
          <Images imgurl={img6} />
        </div>

        
       
      </motion.div>
    </>
  )
}

export default Home