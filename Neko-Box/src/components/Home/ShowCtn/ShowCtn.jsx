import './ShowCtn.css'
import React from 'react'
import { useEffect, useContext } from 'react'
import {Context} from '../../../ContextProvider'
import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";

const ShowCtn = () => {

  const {
    getShows, shows,
    currentShow
  } = useContext(Context);

  useEffect(() => {
    getShows()
  }, []);

  return (
    <div className='show-ctn' >

      {shows.map(show => (   
          <div className='show' key={show.id} >
            <Link to='/show-details' className='show-link'>
              <h1>{show.name}</h1>
            </Link>
            <h3>{show.rating}</h3>
            <IoBookmark className='bookmark' onClick={() => console.log('Saved '+show.name+' to watchlist!')} />
          </div>
      ))}

    </div>
  )
}

export default ShowCtn
