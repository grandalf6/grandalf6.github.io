import React from 'react'
import SKILLS_DATA from '../../../../old/SKILLS_DATA'
import SkillsContentItem from './skillsContentItem/SkillsContentItem'
import styled from 'styled-components'

const SkillsContentDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const SkillsContent = () => (
	<SkillsContentDiv>
		{SKILLS_DATA.map(({skillName, icon, color}, index) => (
			<SkillsContentItem skillName={skillName} icon={icon} key={index} color={color} />
		))}
	</SkillsContentDiv>
)

export default SkillsContent
