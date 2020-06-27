import {l, m, s, xs} from 'styles/breakpoints'

import React from 'react'
import WorkedWithContentItem from './workedWithContentItem/WorkedWithContentItem'
import styled from 'styled-components'

const WorkedWithContentDiv = styled.div`
	display: flex;
	justify-content: space-around;

	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`

const WorkedWithContent = () => {
	const companiesArray = [
		{link: 'https://pbs.twimg.com/profile_images/790486941292716032/x1Sn6ATy.jpg'},
		{
			link:
				'https://d1nzzttg89jj6.cloudfront.net/assets/articles/1584956518/hsbc-and-alibaba-partner-on-ecommerce-finance-1584956518.png'
		}
	]

	return (
		<WorkedWithContentDiv>
			{companiesArray.map(({link}, index) => <WorkedWithContentItem key={index} link={link} />)}
		</WorkedWithContentDiv>
	)
}

export default WorkedWithContent
