import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import './App.css'

function App() {

  return (
    <div className="app" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>  
    </div>
  )
}

export default App
