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
            ease: [0.6, 0.01, -0.05, 0.95],
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
        return () => clearTimeout(timer)
    })

  return (
    <div>
      <div>
        <img src={myHero} alt="" />
      </div>
    </div>
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
