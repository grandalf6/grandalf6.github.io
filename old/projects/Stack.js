import IconForProject from './IconForProject'
import React from 'react'

const Stack = ({stack}) => (
	<div className="stack">{stack.map((icon, index) => <IconForProject key={index} icon={icon} />)}</div>
)

export default Stack
