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
      className='w-full h-full flex justify-center items-center px-4'>
        <div className='flex flex-col items-center justify-center gap-3'>
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
                className='text-8xl font-semibold tracking-tighter'>
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className='grid-cols-12'>
              <div className='w-[300px]'>
                <motion.img layoutId='main-picture' transition={{ease: [0.17, 0.67, 0.83, 0.67], duration: 1.6}} className='object-contain' src={myHero}/>
              </div>
            </div>
        </div>
      </motion.div>
    </motion.section>
    
  )
}

export default Hero
