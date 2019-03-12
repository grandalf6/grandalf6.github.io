import React from "react"

import SectionTitle from "./SectionTitle"
import SkillsGrid from "./SkillsGrid"
import TypeIt from "typeit"

class Skills extends React.Component {
	render() {
		return(
			<section id="skills">
				<SectionTitle
					sectionName="Skills"
				/>
				
				<SkillsGrid />
			</section>
		)
	}
}

export default Skills