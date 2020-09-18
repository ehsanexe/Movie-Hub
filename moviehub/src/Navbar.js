import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper teal lighten-2">
      <div className="container">
        <Link className="brand-logo" to="/">Movie Hub</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>

        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)