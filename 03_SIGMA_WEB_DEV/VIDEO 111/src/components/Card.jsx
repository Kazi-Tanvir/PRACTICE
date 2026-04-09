import './card.css'

import React from 'react'

const Card = (props) => {
  return (

        <div className='card'>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Card Image' />
            </div>
            <div className='card-content'>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <button>click</button>
            </div>
        </div>
      
    
  )
}

export default Card
