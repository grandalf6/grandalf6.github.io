import Navbar from 'routes/navbar/Navbar'
import React from 'react'
import Single from 'routes/single/Single'
import styled from 'styled-components'

const AppMain = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const App = () => (
	<AppMain>
		<Navbar />
		<Single />
	</AppMain>
)

export default App
