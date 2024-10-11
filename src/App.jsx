import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './sections/Home'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
      </div>
    </>
  )
}

export default App
