import React from 'react'
import "./Input.css"

function Input(props) {
  return (
    <div className='input-container'>
        <label htmlFor={props.id}>{props.label}</label>
        <input minLength={props.minLength} required={props.isRequired} type={props.type} placeholder={props.placeholder} id={props.id} />
      
    </div>
  )
}

export default Input
