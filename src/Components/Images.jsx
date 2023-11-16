import React from 'react'

const Images = (props) => {
    return (

            <div className='mx-4 my-5 border-2 rounded-lg border-gray-400 shadow-md hover:shadow-lg transition delay-75 hover:scale-105 hover:cursor-pointer'>
                <img class="h-auto max-w-full rounded-lg" src={props.imgurl} alt="" />
            </div>
    )
}

export default Images