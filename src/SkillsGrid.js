import React from "react"
import SkillSingle from "./SkillSingle"
import skillsData from "./skillsData"

function SkillsGrid() {
	return(
		<div>
			<div className="skillsGrid">
				{skillsData.map(x => <SkillSingle
					skillName={x.skillName}
					icon={x.icon}
					color={x.color}
					key={x.skillName}
				/>)}
			</div>
		</div>
	)
}

export default SkillsGrid