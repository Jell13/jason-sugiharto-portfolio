import React from 'react'

const NavBar = () => {

    const links = [
        {
            id: 1,
            name: "About",
            link: "/"
        },
        {
            id: 2,
            name: "Projects",
            link: "/"
        }
    ]

  return (
    <header className='w-full h-20 flex justify-between items-center bg-slate-400 px-24'>
      <div className=''>
        Logo
      </div>
      <nav className='flex gap-4'>
        {links.map(({id, name, link}) => (
            <div key={id}>
                {name}
            </div>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
