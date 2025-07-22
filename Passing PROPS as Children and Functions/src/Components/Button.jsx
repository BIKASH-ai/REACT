import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
    <button onClick = {props.handleclick} className='btn'>
        <span>{props.text}</span>
    </button>
    
    </div>
  )
}

export default Button