import React from 'react'
import styled from 'styled-components'

const WorkedWithContentItemArticle = styled.article`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;

	& > img {
		max-width: 100%;
		height: auto;
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		width: 100%;
		height: 50%;
	}
`

const WorkedWithContentItem = ({link}) => (
	<WorkedWithContentItemArticle>
		<img src={link} />
	</WorkedWithContentItemArticle>
)

export default WorkedWithContentItem
