import React from 'react'
import './Navbar.css'
import { SiGnuicecat } from "react-icons/si";

const Navbar = () => {
  return (
    <div id="navbar" >
      <div className='nav-divs left-div' >
        <div>
          <SiGnuicecat className='neko'/>
          <h1>Neko Box</h1>
        </div>
        <div><h3>New</h3></div>
        <div><h3>Popular</h3></div>
      </div>
      <div className='nav-divs right-div' >
        <input placeholder='search' />
        <div><h3>Watchlist</h3></div>
      </div>
    </div>
  )
}

export default Navbar
