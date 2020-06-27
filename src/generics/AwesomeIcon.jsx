import React from 'react'
import styled from 'styled-components'

const AwesomeIconI = styled.i`
	width: auto;
	height: ${({height}) => height && height};
	color: ${({color}) => color && color};

	&:hover {
		color: ${({hoverColor}) => hoverColor && hoverColor};
	}
`

const AwesomeIcon = ({color, hoverColor, icon, size, align}) => (
	<AwesomeIconI
		color={color}
		hoverColor={hoverColor}
		className={
			icon +
			(size ? ' fa-' + size + 'x' : '') +
			(color ? ' has-text-' + color : '') +
			(align ? ' has-text-' + align : '')
		}
	/>
)

export default AwesomeIcon
