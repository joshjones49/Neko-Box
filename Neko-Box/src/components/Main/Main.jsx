import './Main.css'
import React from 'react'
import { useEffect, useContext } from 'react'
import {Context} from '../../ContextProvider'

const Main = () => {

  const {
    getShows, shows, setShows
  } = useContext(Context);

  useEffect(() => {
    getShows()
  }, []);

  return (
    <div className='main' >

      {shows.map(show => (
        <div key={show.id} className='show'>
          <h1>{show.name}</h1>
          <h3>{show.description}</h3>
          <h3>{show.rating}</h3>
          <h3>{show.audience}</h3>
          <h3>{show.category}</h3>
        </div>
      ))}

    </div>
  )
}

export default Main
