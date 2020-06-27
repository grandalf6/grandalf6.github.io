import AwesomeIcon from './node_modules/generic/AwesomeIcon'
import LevelGeneric from './node_modules/generic/LevelGeneric'
import React from 'react'
import TextGeneric from './node_modules/generic/TextGeneric'

const SingleSkill = ({data: {color, icon, skillName}}) => (
	<LevelGeneric
		item={true}
		content={
			<div className="tooltip is-tooltip-bottom" data-tooltip={skillName}>
				<AwesomeIcon size={1} icon={icon} colorOut={color} />
			</div>
		}
	/>
)

export default SingleSkill
