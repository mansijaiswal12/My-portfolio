import React from "react";
import {FaHtml5} from 'react-icons/fa'
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiRender } from "react-icons/si";
import {motion} from 'framer-motion'

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";


function TechStack() {
  return(
    <>
    <motion.section
    initial= {{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}>
    <div>

      <h1 className="text-5xl m-4 text-center mt-5 font-semibold " style={{color:'wheat'}}>Professional Skillset</h1>
      <div className="flex flex-col gap-12 mt-10">
        <ul className="flex gap-[4rem] text-8xl flex-wrap ms-3 justify-center">
          <li className="border-2 py-2 px-8 rounded-md" style={{borderColor:'wheat'}}><DiJavascript1/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><DiNodejs/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><DiGit/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><DiReact/></li>
        </ul>

        <ul className="flex gap-[4rem] text-8xl flex-wrap ms-3 justify-center">
        <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><DiMongodb/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><DiPython/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><FaHtml5/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><FaCss3Alt /></li>
        </ul>

        <ul className="flex gap-[4rem] text-8xl justify-center flex-wrap ms-3">
        <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><FaBootstrap/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><SiTailwindcss/></li>
          
        </ul>
        
        <div  className="mb-6">
        <h1 className="text-5xl text-center mt-5 my-7 font-semibold " style={{color:'wheat'}}>Tools</h1>
          <ul className="flex gap-[4rem] text-8xl mb-5 flex-wrap my-3 justify-center"> 
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><TbBrandVscode/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><SiPostman /></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><SiPycharm /></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><FaWordpress/></li>
          <li className="border-2 py-2 px-8 rounded-md"style={{borderColor:'wheat'}}><SiRender /></li>
         
         </ul>
        </div>
      </div>



      
    </div>
    </motion.section>
    </>
  )

}


export default TechStack;