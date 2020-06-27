import AwesomeIcon from 'generic/generic2/AwesomeIcon'
import LevelGeneric from 'generic/LevelGeneric'
import React from 'react'
import TextGeneric from 'generic/TextGeneric'

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
