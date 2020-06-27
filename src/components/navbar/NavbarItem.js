import AwesomeIcon from '../generic/AwesomeIcon'
import React from 'react'
import styled from 'styled-components'

const NavbarItemLi = styled.li`
	list-style-type: none;
	height: 50px;
	padding: 8px 12px;
`

const NavbarItem = ({icon, link, name}) => (
	<NavbarItemLi className="navbar-item" data-tooltip={name}>
		<a href={link} target="_blank">
			<AwesomeIcon size={'2'} icon={icon} />
		</a>
	</NavbarItemLi>
)

export default NavbarItem
