import About from 'routes/single/about/About'
import PageHeader from 'routes/single/pageHeader/PageHeader'
import React from 'react'

const Single = () => {
	return (
		<div>
			{/* route should have:
	header
	sections
	footer
	 */}
			<PageHeader />
			<About />
		</div>
	)
}

export default Single
