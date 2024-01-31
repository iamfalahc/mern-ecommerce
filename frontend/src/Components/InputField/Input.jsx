import React from 'react'
import "./Input.css"

function Input(props) {
  return (
    <div className='input-container'>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.text} placeholder={props.placeholder} id={props.id} />
      
    </div>
  )
}

export default Input
