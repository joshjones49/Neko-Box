import React from 'react'
import './Home.css'
import Hero from './Hero/Hero'
import ShowCtn from './ShowCtn/ShowCtn'

const Home = () => {
  return (
    <div className='home' >
      <Hero />
      <ShowCtn />
    </div>
  )
}

export default Home
