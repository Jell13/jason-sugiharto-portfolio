import { useState } from 'react'
import viteLogo from '/vite.svg'

import About from './sections/About'
import { ReactLenis } from 'lenis/dist/lenis-react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import { motion } from 'framer-motion'
import Loader from './components/Loader'

function App() {
  
  const[loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <motion.div>
          <Loader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <>
          <ReactLenis root>
            <NavBar/>
            <Hero/>
            <About/>
          </ReactLenis>
        </>
      )}
    
    </>
  )
}

export default App
