import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../../ContextProvider'
import './ShowDetails.css'

const ShowDetails = () => {
  const {id} = useParams();
  const {
    currentShow, setCurrentShow, getShowDetails
  } = useContext(Context);

  useEffect(() => {
    getShowDetails(id);
  }, [id, getShowDetails])

  return (
    <div className='show-details' >
      {currentShow.map(show => (
        <div key={show.id} className='show-item'>
          <h2>{show.title}</h2>
          <p>{show.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowDetails
