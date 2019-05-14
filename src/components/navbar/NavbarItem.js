import React from 'react'
import AwesomeIcon from '../generic/AwesomeIcon'

const NavbarItem = ({data: {icon, link}}) => (
  <div className="navbar-item">
    <a href={link} target="_blank">
      <AwesomeIcon size={3} icon={icon} />
    </a>
  </div>
)

export default NavbarItem
