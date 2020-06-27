import React from 'react'
import styled from 'styled-components'

const TypographyGenericSpan = styled.span`
	font-size: ${({fontSize}) => fontSize && fontSize};
	text-align: ${({textAlign}) => textAlign && textAlign};
	color: ${({color}) => color && color};
	text-transform: ${({textTransform}) => textTransform && textTransform};
	text-transform: ${({textTransform}) => textTransform && textTransform};
	margin: ${({margin}) => (margin ? margin : '0')};
	font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 'normal')};
`

const TypographyGeneric = ({textTransform, fontWeight, as, color, margin, content, fontSize, textAlign}) => (
	<TypographyGenericSpan
		as={as}
		fontSize={fontSize}
		textAlign={textAlign}
		fontWeight={fontWeight}
		color={color}
		textTransform={textTransform}
		margin={margin}
		className="typography-generic">
		{content}
	</TypographyGenericSpan>
)

export default TypographyGeneric
