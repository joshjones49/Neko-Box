import './ShowCtn.css'
import React from 'react'
import { useEffect, useContext } from 'react'
import {Context} from '../../ContextProvider'
import { Link } from "react-router-dom";

const ShowCtn = () => {

  const {
    getShows, shows, setShows
  } = useContext(Context);

  useEffect(() => {
    getShows()
  }, []);

  return (
    <div className='show-ctn' >

      {shows.map(show => (
        <Link to='/show-details' className='show show-link' key={show.id}>
          <div>
            <h1>{show.name}</h1>
            <h3>{show.description}</h3>
            <h3>{show.rating}</h3>
            <h3>{show.audience}</h3>
            <h3>{show.category}</h3>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default ShowCtn
