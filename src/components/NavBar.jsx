import React from 'react'

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
    <header className='w-full absolute flex py-7 justify-between items-center px-20'>
      <div className=''>
        <h1 className='font-semibold tracking-tight text-xl'>By Jason <span></span></h1>
      </div>
      <nav className='flex gap-4'>
        {links.map(({id, name, link}) => (
          <a href={link} className='relative group text-lg' key={id}>
              {name}
              <span className='absolute left-0 border-b-2 border-gray-500 group-hover:w-full w-0 duration-300 cursor-pointer'>&nbsp;</span>
          </a>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
