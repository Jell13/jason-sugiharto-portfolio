import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'

const About = () => {

  return (
    <section id="about" className='h-[120%] bg-black rounded-3xl text-white md:px-10 py-20'>
      <h1 className='text-white text-7xl mb-8'>
        ABOUT ME
      </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam at optio eaque dicta doloremque. Dolorum saepe animi odio tempore unde temporibus cum! Quo nostrum error eius ullam reprehenderit dolor.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem aperiam illum nisi impedit, ea pariatur laudantium nobis vero sapiente? Asperiores esse inventore perspiciatis quis commodi. Fuga beatae dolorum impedit?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam quibusdam ea a reprehenderit perspiciatis maiores nam accusamus, aut unde. Sunt nobis aut sequi omnis dolor vitae nostrum soluta eligendi.
      </div>
    </section>
  )
}

export default About
