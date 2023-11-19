import React from 'react'
import { motion } from 'framer-motion'

import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const Images = (props) => {

    const className = props.typeo==="static"?"text-center  mx-6 my-2 h-5/6 w-auto rounded-lg border-gray-400 shadow-md hover:shadow-lg  hover:cursor-pointer overflow-hidden":"mx-6 h-auto text-center  w-auto my-2 rounded-lg border-gray-400 shadow-md hover:shadow-lg  hover:cursor-pointer overflow-hidden"

    return (
        
            <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}  className={className}>
               
                <img class="object-fill  transition delay-75 rounded-lg hover:scale-105 " src={props.imgurl} alt="" />
            </motion.div>
    )
}

export default Images