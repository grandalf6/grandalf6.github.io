import PageHeader from 'routes/single/pageHeader/PageHeader'
import PageSectionGeneric from 'generics/pageSectionGeneric/PageSectionGeneric'
import React from 'react'
import SkillsContent from './skills/SkillsContent'
import WorkedWithContent from './workedWith/WorkedWithContent'
import colors from 'styles/colors'
import styled from 'styled-components'

const SingleDiv = styled.div`
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
		{
			pageSectionGenericTitleContent: 'Skills',
			pageSectionGenericContent: <SkillsContent />
		},
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
					titleColor={colors.dark}
					background={colors.white}
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
