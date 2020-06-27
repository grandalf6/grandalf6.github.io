import React from 'react'
import colors from 'styles/colors'
import styled from 'styled-components'

const AwesomeIconI = styled.i`
	width: auto;
	height: ${({height}) => height && height};
	color: ${colors.white};

	&:hover {
		color: ${colors.yellow};
	}
`

const AwesomeIcon = ({color, colorOut, icon, size, align}) => (
	<AwesomeIconI
		style={{color: colorOut}}
		className={
			icon +
			(size ? ' fa-' + size + 'x' : '') +
			(color ? ' has-text-' + color : '') +
			(align ? ' has-text-' + align : '')
		}
	/>
)

export default AwesomeIcon
