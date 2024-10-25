import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'

const Services = () => {

  const aboutRef = useRef()

  const WHAT = "WHAT"
  const DO = "DO"
  const I = "I"


  return (
    <section id="services" className='h-screen text-white '>
      <div className='h-[200%] bg-black rounded-3xl z-10 mb-8 md:px-10 py-20'>
        <h1 ref={aboutRef} className='text-white lg:text-[7rem] md:text-[5rem] mb-8'>
          WHAT I DO /
        </h1>
        
      </div>
    </section>
  )
}

export default Services
