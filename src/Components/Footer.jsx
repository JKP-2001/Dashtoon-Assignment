import { Typography } from "@material-tailwind/react";

import { motion } from "framer-motion";

import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from "@mui/icons-material";
import { Note } from "./Note";


export function Footer() {

  const click = (url) => {
    window.open(url, '_blank');
  }

  return (



    <motion.div initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}>

      <div className='text-center mb-5 '>
        <Note />
      </div>

      <section class="bg-black">
        <div class="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          </nav>
          <div class="flex justify-center mt-8 space-x-6">



            <div class=" text-gray-400 hover:cursor-pointer hover:text-gray-300" onClick={() => click("https://github.com/JKP-2001/")}>
              <span class="sr-only">GitHub</span>
              <GitHub />
            </div>

            <div onClick={() => click("https://www.linkedin.com/in/jitendra-kumar-pandey-95b545214/")} class="text-gray-400 hover:cursor-pointer hover:text-gray-300 ">
              <span class="sr-only">LinkedIn</span>
              <LinkedInIcon />

            </div>

            <a href="mailto:jkp6957@gmail.com" class="text-gray-400 hover:cursor-pointer hover:text-gray-300 ">
              <MailIcon />
            </a>

          </div>
          <p class="mt-8 text-base leading-6 text-center text-gray-100 font-handwritten2">
            © 2023 Jitendra , Inc. All rights reserved.
          </p>
        </div>
      </section>
    </motion.div>
  );
}