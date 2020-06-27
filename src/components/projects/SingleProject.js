import CardContent from './CardContent'
import React from 'react'
import ScreenshootForProject from './ScreenshootForProject'
import ScrollAnimation from 'react-animate-on-scroll'

const SingleProject = ({data: {description, file, link, name, repo, stack}}) => (
	<div className="tile is-7 is-parent">
		<ScrollAnimation animateIn="fadeInUp" animateOnce={true} className="tile is-child card">
			<ScreenshootForProject file={file} />
			<CardContent description={description} link={link} name={name} repo={repo} stack={stack} />
		</ScrollAnimation>
	</div>
)

export default SingleProject
