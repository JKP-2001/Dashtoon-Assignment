import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Images from '../Components/Images'
import { useSelector } from 'react-redux'

import { motion } from "framer-motion";

const Home = () => {

  const imageState = useSelector((state) => state.image);

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 3 }} transition={{
      ease: "linear",
      duration: 1,
      x: { duration: 1 }
    }}>
      <div className="navbar ">

        <Navbar />
      </div>

      <div className=' '>

        <div className="entry_message mx-10 pt-20 ">

          <motion.div  className='text-4xl sm:text-5xl items-center text-center font-handwritten2 text-white'>
            Welcome to AI Image Generator,
          </motion.div>
          <div className='text-4xl sm:text-5xl items-center text-center font-handwritten2 text-white'>
            where creativity meets artificial intelligence!
          </div>

          <div className='text-center mx-5 sm:mx-40 mt-6 text-white'>
            Unleash the power of cutting-edge technology to transform your ideas into stunning visuals. Our user-friendly platform seamlessly merges the world of art and artificial intelligence to bring your imagination to life.
          </div>

        </div>

        <div className="search px-5 sm:px-16 pt-20">
          <SearchBar />
        </div>

        {/* <div "></div> */}

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:mx-16 pt-16 pb-7">
          {imageState.data.map((url, i) => {
            return <Images imgurl={url} key={i} />
          })}
          {imageState.data.map((url, i) => {
            return <Images imgurl={url} key={i} />
          })}
          {imageState.data.map((url, i) => {
            return <Images imgurl={url} key={i} />
          })}
          {imageState.data.map((url, i) => {
            return <Images imgurl={url} key={i} />
          })}
        </div>
      </div>

    </motion.div>
  )
}

export default Home