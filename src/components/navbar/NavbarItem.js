import React from 'react'
import AwesomeIcon from '../generic/AwesomeIcon'

const NavbarItem = ({data: {icon, link}}) => {
  return (
    <div class="navbar-item">
      <a href={link} target="_blank">
        <AwesomeIcon size={3} icon={icon} />
      </a>
    </div>
  )
}

export default NavbarItem
