import React from 'react'
import './Home.css'
import Type from './Type'
import {motion} from 'framer-motion'
import photo from '../assets/about.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
   <main >
   <motion.section 
   initial= {{opacity:0, y:-50}}
   animate={{opacity:1, y:0}}
   transition={{duration:1}}
    >
    <div className='sm:flex sm:gap-2 bg-black-50'>
      <div style={{color:'wheat',fontWeight:'bolder',fontFamily:'revert-layer'}}
      // marginLeft:'5rem', paddingTop:'5.6rem', fontSize:'2.5rem'
      className=' ml-[20%] w-1/2 text-[2.5rem]  sm:ml-[5rem] sm:pt-[5.6rem] sm:text-[2.5rem]'>
        <motion.h1 >Hi there! <span className='animate__animate animate__shakex'>👋🏻</span></motion.h1>
        <motion.h1 style={{color:'var(--text-color)'}}>I am Mansi Jaiswal
      
        </motion.h1>
        <Type />
        
        </div>
        <picture className='w-[70%] sm:w-[25%]'>
      <img src={photo} alt="home photo" style={{ marginTop:'2.5rem'}}/>
      </picture>  
    </div>

    <section className='flex-col py-16 justify-center my-12' style={{fontSize:'2rem'}}> 
    <h1 className= 'text-center' style={{color:'var(--text-color)'}} >LET ME INTRODUCED MYSELF</h1>
       <p  className='text-center'style={{color:'white', fontSize:'1.7rem',
     marginTop:'1rem', fontFamily:"cursive"}}>
        
         I am passionate Mern Stack Developer<br/>
         I have knowledge in html,css,javascript,
         bootstrap,<br/> react js I am still learning the 
         backend technologies<br/>
         I have build sevaral projects in Mern Stack & React Js.
       </p> 
       
     
      </section>
    
    <div className='flex justify-center flex-col' >
    
         <h2 className='text-center text-4xl ' style={{color:'wheat',fontWeight:'bold', fontFamily:'sans-serif'}}>Follow Me </h2>
    
    </div>
    <div className="flex justify-center gap-2 py-3">
         <p className=' py-4 self-center' /> <FaLinkedin size={39} style={{color:'wheat'}} /> 
         
         <p className='inline-block self-center' /><FaGithub size={39} style={{color:'wheat'}} />
         
         <p className='inline-block self-center'/><MdEmail size={39}  style={{color:'wheat'}} />

   </div> 

  
    
</motion.section>
   </main>
  )
}
// style={{marginTop:'10rem', display:'flex',justifyContent:'center'}}

export default Home
