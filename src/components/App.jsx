import About from './about/About'
import Navbar from './navbar/Navbar'
import PageHero from './pageHero/PageHero'
import React from 'react'
import styled from 'styled-components'

const AppMain = styled.main`width: 100%;`

const App = () => (
	<AppMain>
		<Navbar />
		<PageHero />
		<About />
	</AppMain>
)

export default App
