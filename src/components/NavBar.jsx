import React from 'react'
import { motion } from 'framer-motion'

const NavBar = () => {

    const links = [
        {
            id: 1,
            name: "About",
            link: "#about"
        },
        {
            id: 2,
            name: "Projects",
            link: "#projects"
        }
    ]

  return (
    <div className='w-full absolute py-8 md:px-10 px-4 flex inset-x-0 z-10 justify-between items-center'>
      <div className='flex flex-col md:flex-row md:gap-7 md:items-center'>
        <div className='flex'>
          <p className='text-lg font-semibold tracking-tighter'>By Jason</p><span>&#169;</span>
        </div>
        <p className='opacity-85 tracking-tighter'>(Web & Software Developer)</p>
      </div>
      <nav className='flex md:flex-row flex-col md:gap-5'>
        {links.map(({id, name, link}) => (
            <a key={id} href={link}>
                {name}
                <span>&nbsp;</span>
            </a>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
