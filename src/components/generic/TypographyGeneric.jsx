import React from 'react'
import styled from 'styled-components'

const TypographyGenericSpan = styled.span`
	font-size: ${({fontSize}) => fontSize && fontSize};
	text-align: ${({textAlign}) => textAlign && textAlign};
	color: ${({color}) => color && color};
	text-transform: ${({textTransform}) => textTransform && textTransform};
	margin: ${({margin}) => (margin ? margin : '0')};
`

const TypographyGeneric = ({textTransform, as, color, margin, content, fontSize, textAlign}) => (
	<TypographyGenericSpan
		as={as}
		fontSize={fontSize}
		textAlign={textAlign}
		color={color}
		textTransform={textTransform}
		margin={margin}
		className="typography-generic">
		{content}
	</TypographyGenericSpan>
)

export default TypographyGeneric
