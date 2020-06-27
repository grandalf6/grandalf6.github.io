import {dark, white} from 'styles/colors'

import PageHeader from 'routes/single/pageHeader/PageHeader'
import PageSectionGeneric from 'generics/pageSectionGeneric/PageSectionGeneric'
import React from 'react'
import SkillsContent from './skills/SkillsContent'

const Single = () => {
	const sectionsArray = [
		{
			pageSectionGenericTitleContent: 'About',
			titleColor: dark,
			background: white
		},
		{
			pageSectionGenericTitleContent: 'Skills',
			titleColor: dark,
			background: white,
			pageSectionGenericContent: <SkillsContent />
		}
	]

	return (
		<div>
			<PageHeader />
			{sectionsArray.map(
				({pageSectionGenericContent, pageSectionGenericTitleContent, titleColor, background}, index) => (
					<PageSectionGeneric
						key={index}
						pageSectionGenericTitleContent={pageSectionGenericTitleContent}
						titleColor={titleColor}
						background={background}
						pageSectionGenericContent={pageSectionGenericContent}
					/>
				)
			)}
		</div>
	)
}

export default Single

// 	route should have:
// 	header
// 	sections
// 	footer
