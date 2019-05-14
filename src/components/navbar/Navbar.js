import React from 'react'
import NavbarItem from './NavbarItem'
import SOCIAL_MEDIA_NAVBAR from '../../assets/data/SOCIAL_MEDIA_NAVBAR'

const Navbar = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      {SOCIAL_MEDIA_NAVBAR.map((item, index) => (
        <NavbarItem data={item} key={index} />
      ))}
    </div>
  </nav>
)

export default Navbar
