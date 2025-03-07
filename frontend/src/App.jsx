import { Route, Routes, BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import LoginPage from "./pages/LoginPage";
// about is Soumya
import CreateBlogPage from "./pages/CreateBlogPage";
import AllPostsPage from "./pages/AllPostsPage";



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/posts" element={<AllPostsPage />} />
        <Route path="/posts/create" element={<CreateBlogPage />} />
        <Route path="/posts/:id" element={<p>Post details</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
