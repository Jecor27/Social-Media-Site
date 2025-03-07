import React, { useState } from 'react'
import { getRandomColor } from '../functions';

export default function Login() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button style={{backgroundColor: getRandomColor(), color: getRandomColor()}} type='submit'>Login</button>
    </form>
  )
}
