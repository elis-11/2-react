import React, { useState } from 'react'
import './UseSt.scss'

const UseSt = () => {

const [counter, setCounter] = useState(0)

  return (
    <div className='UseSt header'>
      <h2>Counter: {counter}</h2> 
      <button className='Add'>Add</button>
      <button className='Delete'>Delete</button>
      
    </div>
  )
}

export default UseSt