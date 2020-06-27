// import * as d3 from 'd3'

import React, {useEffect, useRef, useState} from 'react'

import SKILLS_DATA from '../../../../old/SKILLS_DATA'
import styled from 'styled-components'

// import SkillsContentItem from './skillsContentItem/SkillsContentItem'

const SkillsContentUl = styled.ul`
	display: flex;
	flex-wrap: wrap;

	& > button {
		position: absolute;
	}
`

const SkillsContent = () => {
	const [skillsData, setSkillsData] = useState()
	// const chartRef = useRef()

	// useEffect(
	// 	() => {
	// 		const svg = d3.select(chartRef.current)

	// 		svg.append('rect').attr('x', 200).attr('y', 200).attr('width', 200).attr('heigth', 200)
	// 	},
	// 	[chartRef]
	// )

	// useEffect(
	// 	() => {
	// 		if (!skillsData) {
	// 			setSkillsData(SKILLS_DATA)
	// 		}
	// 	},
	// 	[SKILLS_DATA, skillsData]
	// )

	return (
		<SkillsContentUl>
			{/* <svg ref={chartRef} /> */}
			{/* {skillsData &&
				skillsData.map(({skillName, icon, color}) => (
					<SkillsContentItem skillName={skillName} icon={icon} key={skillName} color={color} />
				))} */}
		</SkillsContentUl>
	)
}

export default SkillsContent
