import React from 'react'

const HeroElement = ({content, type}) => (
	<div className={type ? 'hero-' + type : 'hero is-fullheight-with-navbar'}>{content}</div>
)

export default HeroElement
