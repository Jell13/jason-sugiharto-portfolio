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

    const scaleDown = useTransform(
      scrollY,
      [0, 300],
      [1, 0.95]
    )
    const DURATION = 1;
    const STAGGER = 0.15;

  return (
    
    <motion.section 
    style={{opacity: opacity}}
    className='h-screen grainy z[-1] pb-10'>
      <motion.div 
      style={{y: translate, scale: scaleDown}}
      className='w-full h-full flex justify-center items-center px-10'>
        <div className='w-full flex flex-col items-center justify-center gap-3 mt-20'>
            <div className=''>
              {"JASON SUGIHARTO".split("").map((letter, i) => (
                <motion.span 
                key={i}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                  duration: DURATION,
                  delay: STAGGER * i,
                  ease: "easeInOut"
                }}
                className='lg:text-[7rem] md:text-[5rem] tracking-tighter font-genSans'>
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className='w-full mt-10 relative grid grid-cols-12 justify-between'>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1, transition:{
                duration: 1.3
              }}}
              className='flex col-span-4 flex-col justify-center items-center'>
                <div className='w-[30ch]'>
                  <p className='text-lg'>Crafting sleek, responsive front-end experiences that turn ideas into interactive, user-friendly interfaces. Every pixel matters, and every line of code drives results.</p>
                </div>
              </motion.div>
              <div className='col-span-4 flex justify-center items-center'>
                <motion.img layoutId='main-image' transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.3}} className='object-contain h-[250px] bg-inherit' src={myHero}/>
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
