import NavbarItem from './NavbarItem'
import React from 'react'
import SOCIAL_MEDIA_NAVBAR from 'assets/data/SOCIAL_MEDIA_NAVBAR'
import styled from 'styled-components'

// import ScrollAnimation from 'react-animate-on-scroll'

const NavbarNav = styled.nav`
	display: flex;
	flex-direction: row-reverse;
	position: fixed;
	width: 100vw;

	& > ul {
		display: flex;
		margin: 0;
		padding: 0;
	}
`

const Navbar = () => (
	<NavbarNav className="navbar">
		<ul className="navbar-brand">
			{SOCIAL_MEDIA_NAVBAR.map(({name, link, icon}, index) => (
				// <ScrollAnimation
				// 	animateIn="fadeInDown delay-1s"
				// 	animateOut="fadeOutUp slower delay-2s"
				// 	delay={(index + 1) * 125}
				// 	key={index}
				// 	offset={0}>
				<NavbarItem name={name} link={link} icon={icon} />
				// </ScrollAnimation>
			))}
		</ul>
	</NavbarNav>
)

export default Navbar
