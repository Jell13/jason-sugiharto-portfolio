import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect } from 'react'

const Hero = () => {

    const { scrollY } = useScroll()

    const opacity = useTransform(
        scrollY,
        [0, 300],
        [1, 0]
    )

  return (
    <motion.section 
    style={{opacity}}
    className='h-screen relative grainy'>
      <div className='w-full h-full flex sticky justify-center items-center px-4'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-4xl tracking-tighter font-semibold md:text-8xl'>JASON SUGIHARTO</h1>
            <div className=' grid-cols-12'>
                
            </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
