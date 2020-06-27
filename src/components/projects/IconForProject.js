import AwesomeIcon from 'generic/generic2/AwesomeIcon'
import React from 'react'
import SKILLS_DATA from 'assets/data/SKILLS_DATA'

const IconForProject = ({icon}) => (
	<div className="IconForProject">
		<AwesomeIcon
			colorOut={SKILLS_DATA.filter((element) => element.skillName.toUpperCase() === icon).map(
				(element) => element.color
			)}
			icon={SKILLS_DATA.filter((element) => element.skillName.toUpperCase() === icon).map(
				(element) => element.icon
			)}
			size={3}
		/>
	</div>
)

export default IconForProject
