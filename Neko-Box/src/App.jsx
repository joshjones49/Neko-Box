import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ShowDetails from './components/ShowDetails/ShowDetails'

import './App.css'

function App() {

  return (
    <div className="app" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show-details' element={<ShowDetails />} />
      </Routes>  
    </div>
  )
}

export default App
