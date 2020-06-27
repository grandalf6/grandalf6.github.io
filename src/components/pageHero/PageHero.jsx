import HeroGeneric from 'generic/generic2/HeroGeneric'
import React from 'react'
import TypographyGeneric from 'components/generic/TypographyGeneric'
import colors from 'styles/colors'

// import ScrollAnimation from 'react-animate-on-scroll'

const Header = () => {
	const titlesArray = [
		{
			as: 'h1',
			color: colors.light,
			align: 'centered',
			fontSize: '48px',
			content: 'Hi, my name is Presh.'
			// animation: 'fadeIn',
			// delay: 150
		},
		{
			as: 'h2',
			bold: 'bold',
			color: colors.yellow,
			fontSize: '16px',
			content: 'front end web developer with react',
			textTransform: 'uppercase'

			// type: 'subtitle'
			// animation: 'fadeIn delay-1s'
		}
	]

	return (
		<HeroGeneric
			background="radial-gradient(circle, rgb(52, 58, 64) 0%, rgb(38, 41, 45) 100%)"
			isFullHeight
			content={titlesArray.map(({as, content, color, textTransform, fontSize}, index) => (
				// <ScrollAnimation key={index} animateIn={animation} animateOut="fadeOutUp" delay={delay}>
				<TypographyGeneric
					as={as}
					color={color}
					content={content}
					key={index}
					fontSize={fontSize}
					textTransform={textTransform}
				/>
				// </ScrollAnimation>
			))}
		/>
	)
}
export default Header
