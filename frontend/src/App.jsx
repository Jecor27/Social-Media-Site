import { Route, Routes, BrowserRouter } from "react-router-dom";
import { getRandomColor } from "./functions";

// Components
import Navbar from "./components/Navbar";

// Pages
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import AllPostsPage from "./pages/AllPostsPage";
import BlogDetails from "./pages/BlogDetails";

function App() {

  return (
    <div className="App" style={{backgroundColor: getRandomColor(), color: getRandomColor()}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<AllPostsPage />} />
          <Route path="/posts/create" element={<CreateBlogPage />} />
          <Route path="/posts/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// Product Owner
// - Bryan

// Backend Team 
// - Jesus & Wend

// Frontend Team
// - Toon, Iris, Jamar, Soumya

