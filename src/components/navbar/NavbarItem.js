import AwesomeIcon from '../generic/AwesomeIcon'
import React from 'react'

const NavbarItem = ({data: {icon, link, name}}) => (
	<div className="navbar-item tooltip is-tooltip-bottom" data-tooltip={name}>
		<a href={link} target="_blank">
			<AwesomeIcon size={3} icon={icon} />
		</a>
	</div>
)

export default NavbarItem
