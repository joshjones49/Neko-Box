import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel.jsx'
import Main from './components/Main/Main.jsx'

function App() {

  return (
    <div id="app" >
      <Navbar />
      <Carousel />
      <Main />   
    </div>
  )
}

export default App
