import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Images from '../Components/Images'
import { useSelector } from 'react-redux'

import { motion } from "framer-motion";
import Drawer from '../Components/Drawer'
import TopText from '../Components/TopText'



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


        
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:mx-16 pt-16 pb-7">
            {imageState.data.map((url, i) => {
              return <Images imgurl={url} key={i} />
            })}

          </div>
      </motion.div>
    </>
  )
}

export default Home