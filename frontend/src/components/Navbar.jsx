import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__inner | container">
        <span className="logo">TwitTerrible</span>
        <nav className="nav">
          <ul className="nav-list">
            <li><NavLink to="/posts">Home</NavLink></li>
            <li><NavLink to="/posts/create">New Post</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
