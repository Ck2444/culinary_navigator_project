import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <nav className="green darken-1">
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Culinary Navigator</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
              <Link to="/about">About us</Link>
            </li>

            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}
