import { div } from 'framer-motion/client'
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import myHero from "../assets/myhero.png"

const Loader = ({setLoading}) => {

    const container = {
        show: {
          transition: {
            staggerChildren: 0.35,
          },
        },
      };
      
      const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
      };

      const itemMain = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1.2,
          },
        },
      };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    //     return () => clearTimeout(timer)
    // })

  return (
    <motion.div className='w-screen h-screen grainy flex justify-center items-center'>
      <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className='w-[400px]'>
        <motion.div
        variants={itemMain}
        >
          <motion.img layoutId="main-image" className='object-contain' src={myHero} alt=""/>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({src}) => {
    return (
        <div className=''>
            <img src={src} alt="" />
        </div>
    )
}

export default Loader
