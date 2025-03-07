import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css"
import { useState } from "react";


function App() {

  const [color, setColor] = useState("black")
  const [background, setBackground] = useState("white")
  


  return (
    
    <div className="App" style={{color: color}}>
    <BrowserRouter>
    {/* navigation here */}
      <Routes>
        <Route path="/" element={<p>Log in</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/posts" element={<p>All Posts</p>} />
        <Route path="/posts/create" element={<p>Create new post</p>} />
        <Route path="/posts/:id" element={<p>Post details</p>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
