import React from 'react'
import TypographyGeneric from 'generics/TypographyGeneric'

// import ScrollAnimation from 'react-animate-on-scroll'

const PageSectionTitle = ({pageSectionGenericTitleContent}) => (
	// <ScrollAnimation animateIn="fadeInLeft" animateOut="bounceOutLeft" offset={65}>
	<TypographyGeneric
		textTransform="capitalize"
		as="h2"
		content={pageSectionGenericTitleContent}
		fontSize="32px"
		fontWeight="600"
	/>
	// </ScrollAnimation>
)

export default PageSectionTitle
