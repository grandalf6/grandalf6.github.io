import React from 'react'
import AwesomeIcon from '../generic/AwesomeIcon'

const NavbarItem = ({data: {icon, link, name}}) => (
  <div className="navbar-item tooltip is-tooltip-bottom" data-tooltip={name}>
    <a href={link} target="_blank">
      <AwesomeIcon size={3} icon={icon} />
    </a>
  </div>
)

export default NavbarItem
