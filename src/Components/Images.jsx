import React from 'react'

const Images = (props) => {
    return (
        
            <div className='  mx-4 my-5 border-2 rounded-lg border-gray-400 shadow-md hover:shadow-lg  hover:cursor-pointer overflow-hidden'>
                <img class="object-cover h-auto w-auto transition delay-75 rounded-lg hover:scale-105 " src={props.imgurl} alt="" />
        </div>
    )
}

export default Images