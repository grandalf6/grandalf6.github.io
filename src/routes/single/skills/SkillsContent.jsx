import React, {useEffect, useState} from 'react'

import SKILLS_DATA from '../../../../old/SKILLS_DATA'
import SkillsContentItem from './skillsContentItem/SkillsContentItem'
import styled from 'styled-components'

const SkillsContentUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;

	& > button {
		position: absolute;
	}
`

const SkillsContent = () => {
	const [skillsData, setSkillsData] = useState()

	useEffect(
		() => {
			if (!skillsData) {
				setSkillsData(SKILLS_DATA)
			}
		},
		[SKILLS_DATA, skillsData]
	)

	return (
		<SkillsContentUl>
			{skillsData &&
				skillsData.map(({skillName, icon, color}) => (
					<SkillsContentItem skillName={skillName} icon={icon} key={skillName} color={color} />
				))}
		</SkillsContentUl>
	)
}

export default SkillsContent
