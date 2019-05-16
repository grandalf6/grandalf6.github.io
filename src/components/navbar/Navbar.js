import React from 'react'
import NavbarItem from './NavbarItem'
import ScrollAnimation from 'react-animate-on-scroll'
import SOCIAL_MEDIA_NAVBAR from '../../assets/data/SOCIAL_MEDIA_NAVBAR'

const Navbar = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      {SOCIAL_MEDIA_NAVBAR.map((item, index) => (
        <ScrollAnimation
          animateIn="fadeInDown delay-1s"
          animateOnce={true}
          delay={(index + 1) * 125}
          key={index}
          offset={10}
        >
          <NavbarItem data={item} />
        </ScrollAnimation>
      ))}
    </div>
  </nav>
)

export default Navbar
