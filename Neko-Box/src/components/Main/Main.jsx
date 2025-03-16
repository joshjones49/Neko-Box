import './Main.css'
import React from 'react'
import { useEffect, useContext } from 'react'
import {Context} from '../../ContextProvider'

const Main = () => {

  const {
    getShows, shows, setShows
  } = useContext(Context);

  useEffect(() => {
    getShows(setShows, shows)
  }, []);

  useEffect(() => {
    console.log(shows)
  }, []);

  return (
    <div className='main' >

      {shows.map(show => (
        <div key={show.id} className='show'>
          <h1>{show.name}</h1>
          <h3>{show.description}</h3>
          <h3>{show.quality_rating}</h3>
          <h3>{show.viewer_rating}</h3>
          <h3>{show.category}</h3>
        </div>
      ))}

    </div>
  )
}

export default Main
