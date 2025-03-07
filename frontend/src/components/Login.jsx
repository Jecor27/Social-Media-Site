import React, { useState } from 'react'

export default function Login() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
