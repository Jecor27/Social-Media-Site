import { Route, Routes, BrowserRouter } from "react-router-dom";

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
  )
}

export default App
