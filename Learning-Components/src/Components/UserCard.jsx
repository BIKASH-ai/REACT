import React from 'react'

const UserCard = (props) => {
  return (
    <div className="user-container">
        <h2 id = 'user-name'>{props.name}</h2>
        <img id = 'user-img'src={props.img} />
        <p id= 'user-desc'>{props.description}</p>
    
    </div>
  )
}

export default UserCard