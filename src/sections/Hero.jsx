import { useScroll, useTransform, motion, animate } from 'framer-motion'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import myHero from "../assets/myhero.png"

const Hero = () => {

    const { scrollY } = useScroll()

    const opacity = useTransform(
      scrollY,
      [0, 300],
      [1, 0]
    )

    const translate = useTransform(
      scrollY,
      [0, 300],
      [0, 100]
    )

    const DURATION = 1;
    const STAGGER = 0.15;

  return (
    
    <motion.section 
    style={{opacity}}
    className='h-screen grainy'>
      <motion.div 
      style={{y: translate}}
      className='w-full h-full flex justify-center items-center px-10'>
        <div className='w-full flex flex-col items-center justify-center gap-3 mt-20'>
            <div>
              {"JASON SUGIHARTO".split("").map((letter, i) => (
                <motion.span 
                key={i}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                  duration: DURATION,
                  delay: STAGGER * i
                }}
                className='md:text-[7rem] text-3xl font-semibold tracking-tighter'>
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className='w-full mt-10 relative grid grid-cols-12 justify-between'>
              <div className='flex col-span-4 flex-col justify-center items-center'>
                <p>I design and develop website</p>
              </div>
              <div className='col-span-4 flex justify-center items-center'>
                <motion.img layoutId='main-image' transition={{ease: [0.17, 0.67, 0.83, 0.67], duration: 1.3}} className='object-contain w-[300px]' src={myHero}/>
              </div>
              <div className='flex flex-col items-end col-span-4 justify-end'>
                <div>
                  <p>Available for work</p>
                </div>
              </div>
            </div>
        </div>
      </motion.div>
    </motion.section>
    
  )
}

export default Hero
