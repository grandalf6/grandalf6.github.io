import NavbarItem from './NavbarItem'
import React from 'react'
import SOCIAL_MEDIA_NAVBAR from '../../assets/data/SOCIAL_MEDIA_NAVBAR'
import ScrollAnimation from 'react-animate-on-scroll'

const Navbar = () => (
	<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			{SOCIAL_MEDIA_NAVBAR.map((item, index) => (
				<ScrollAnimation
					animateIn="fadeInDown delay-1s"
					animateOut="fadeOutUp slower delay-2s"
					delay={(index + 1) * 125}
					key={index}
					offset={0}>
					<NavbarItem data={item} />
				</ScrollAnimation>
			))}
		</div>
	</nav>
)

export default Navbar
