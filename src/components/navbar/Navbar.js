import React from 'react'
import NavbarItem from './NavbarItem'
import SOCIAL_MEDIA_NAVBAR from '../../assets/data/SOCIAL_MEDIA_NAVBAR'

const Navbar = () => {
  return (
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        {SOCIAL_MEDIA_NAVBAR.map((item) => (
          <NavbarItem data={item} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar
