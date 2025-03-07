import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  return (
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
  )
}

export default App
