import CardFooterItem from './CardFooterItem'
import React from 'react'

const CardFooter = ({link, repo}) => (
	<footer className="card-footer">
		{[
			{
				buttonLink: link,
				buttonName: 'DEMO'
			},
			{
				buttonLink: repo,
				buttonName: 'REPO'
			}
		].map((item, index) => <CardFooterItem key={index} data={item} />)}
	</footer>
)

export default CardFooter
