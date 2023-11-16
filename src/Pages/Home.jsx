import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Images from '../Components/Images'
import { useSelector } from 'react-redux'

const Home = () => {

  const imageState = useSelector((state)=> state.image);

  return (
    <div>
      <div className="navbar">

        <Navbar />
      </div>

      <div className="entry_message mx-10 mt-16 transition delay-75 hover:scale-105">
        
        <div className='text-4xl sm:text-5xl items-center text-center font-handwritten2'>
          Welcome to AI Image Generator, 
        </div>
        <div className='text-4xl sm:text-5xl items-center text-center font-handwritten2'>
          where creativity meets artificial intelligence! 
        </div>

        <div className='text-center mx-5 sm:mx-40 mt-6 text-gray-600'>
          Unleash the power of cutting-edge technology to transform your ideas into stunning visuals. Our user-friendly platform seamlessly merges the world of art and artificial intelligence to bring your imagination to life.
        </div>

      </div>

      <div className="search px-5 sm:px-16 pt-20">
        <SearchBar />
      </div>

      {/* <div "></div> */}

      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 xl:mx-16 mt-16">
        {imageState.data.map((url,i)=>{
          return <Images imgurl={url} key={i}/>
        })}
      </div>
        
    </div>
  )
}

export default Home