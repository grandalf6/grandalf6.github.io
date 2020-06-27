import PageSectionGenericTitle from './PageSectionTitle'
import React from 'react'
import styled from 'styled-components'

const PageSectionGenericSection = styled.section`
	/* border: 1px solid red; */
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
	max-width: 1280px;
	background: ${({background}) => background && background};
	padding: 48px 24px;
`

const PageSectionGeneric = ({titleColor, background, pageSectionGenericTitleContent, pageSectionGenericContent}) => (
	<PageSectionGenericSection background={background} className="page-section-generic">
		<PageSectionGenericTitle color={titleColor} pageSectionGenericTitleContent={pageSectionGenericTitleContent} />
		{pageSectionGenericContent}
	</PageSectionGenericSection>
)

export default PageSectionGeneric
