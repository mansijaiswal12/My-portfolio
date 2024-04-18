import React from 'react'
import Typewriter from 'typewriter-effect'
const Type = () => {
  return (
    <>
    <Typewriter
        options={{
            strings:[
                'MERN STACK DEVELOPER',
                'Software Developer',
                'Web Developer',
                'Front End Developer'
            ],
            autoStart:true,
            loop:true,
            deleteSpeed:10
        }}
        
    />

      
    </>
  )
}

export default Type
