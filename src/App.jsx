import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import About from './sections/About'
import { ReactLenis } from 'lenis/dist/lenis-react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
      <div className='min-h-screen'>
        <ReactLenis root>
          <NavBar/>
          <Hero/>
          <About/>
        </ReactLenis>
      </div>
    </>
  )
}

export default App
