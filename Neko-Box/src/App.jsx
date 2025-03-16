import { useState, useEffect, useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel.jsx'
import Main from './components/Main/Main.jsx'
import { Context } from './ContextProvider.jsx'

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
