import CardFooter from './CardFooter'
import React from 'react'
import Stack from './Stack'
import TitleGeneric from '../generic/TitleGeneric'

const CardContent = ({description, link, name, repo, stack}) => (
	<div className="card-content">
		<div className="media">
			<div className="media-content">
				<TitleGeneric align="centered" size={6} type="title" text={name} />
			</div>
		</div>

		<div className="content">{description}</div>
		<Stack stack={stack} />
		<CardFooter link={link} repo={repo} />
	</div>
)

export default CardContent
