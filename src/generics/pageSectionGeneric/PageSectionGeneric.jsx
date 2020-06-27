import HeroGeneric from '../HeroGeneric'
import PageSectionGenericTitle from './PageSectionTitle'
import React from 'react'
import styled from 'styled-components'

const PageSectionGenericSection = styled.section`
	border: 1px solid red;
	width: 100%;
	min-height: 100vh;
	background: ${({background}) => background && background};
	padding: 48px 24px;
`

const PageSectionGeneric = ({titleColor, background, pageSectionGenericTitleContent, pageSectionGenericContent}) => (
	<PageSectionGenericSection background={background} className="page-section-generic">
		<PageSectionGenericTitle color={titleColor} pageSectionGenericTitleContent={pageSectionGenericTitleContent} />
		{/* <HeroGeneric background="red" isFu content={<p>aaa</p>} /> */}
		{/* {pageSectionGenericContent} */}
	</PageSectionGenericSection>
)

export default PageSectionGeneric
