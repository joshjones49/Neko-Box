import './Carousel.css'
import React from 'react'
import { SiGnuicecat } from "react-icons/si"

const Carousel = () => {
  return (
    <div className='carousel' >
      <div>
        <div>
        <SiGnuicecat className='neko'/>
        <h1>NEKO BOX</h1>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad voluptate natus tempora corporis, in libero rem fuga dicta facilis illo incidunt neque velit itaque excepturi praesentium asperiores laborum. Aliquid.</p>
      </div>
    </div>
  )
}

export default Carousel
