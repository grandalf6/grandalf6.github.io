import ButtonGeneric from 'generic/ButtonGeneric'
import React from 'react'

const CardFooterItem = ({data: {buttonLink, buttonName}}) => (
	<a href={buttonLink} target="_blank">
		<ButtonGeneric color="white" text={buttonName} />
	</a>
)

export default CardFooterItem
