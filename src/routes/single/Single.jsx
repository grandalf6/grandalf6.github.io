import {dark, white} from 'styles/colors'

import PageHeader from 'routes/single/pageHeader/PageHeader'
import PageSectionGeneric from 'generics/pageSectionGeneric/PageSectionGeneric'
import React from 'react'
import SkillsContent from './skills/SkillsContent'
import WorkedWithContent from './workedWith/WorkedWithContent'
import styled from 'styled-components'

const SingleDiv = styled.div`
	/* border: 1px solid red; */
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > *:not(:first-child) > *:last-child {
		flex-grow: 1;
	}
`

const Single = () => {
	const sectionsArray = [
		// {
		// 	pageSectionGenericTitleContent: 'About'
		// },
		// {
		// 	pageSectionGenericTitleContent: 'Skills',
		// 	pageSectionGenericContent: <SkillsContent />
		// },
		{
			pageSectionGenericTitleContent: 'Worked with',
			pageSectionGenericContent: <WorkedWithContent />
		}
	]

	return (
		<SingleDiv>
			<PageHeader />
			{sectionsArray.map(({pageSectionGenericContent, pageSectionGenericTitleContent}, index) => (
				<PageSectionGeneric
					key={index}
					pageSectionGenericTitleContent={pageSectionGenericTitleContent}
					titleColor={dark}
					background={white}
					pageSectionGenericContent={pageSectionGenericContent}
				/>
			))}
		</SingleDiv>
	)
}

export default Single

// 	route should have:
// 	header
// 	sections
// 	footer
