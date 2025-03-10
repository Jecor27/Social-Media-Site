import { NavLink } from "react-router-dom"
import { getRandomColor } from "../functions"

export default function Navbar() {
  return (
    <header 
      className="header"
      style={{backgroundColor: getRandomColor(), color: getRandomColor()}}
    >
      <div className="header__inner | container">
        <span className="logo">TwitTerrible</span>
        <nav className="nav">
          <ul className="nav-list" >
            <li><NavLink style={{color: getRandomColor()}} to="/posts">Home</NavLink></li>
            <li><NavLink style={{color: getRandomColor()}} to="/posts/create">New Post</NavLink></li>
            <li><NavLink style={{color: getRandomColor()}} to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
