import React from 'react'
import styled from 'styled-components'

const HeroGenericDiv = styled.div`
	background: ${({background}) => background && background};
	min-width: 100%;
	max-width: 100%;
	height: ${({isFullHeight}) => (isFullHeight ? '100vh' : '75vh')};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const HeroGeneric = ({background, isFullHeight, content, styles}) => (
	<HeroGenericDiv isFullHeight={isFullHeight} styles={styles} background={background} className="hero-generic">
		{content}
	</HeroGenericDiv>
)

export default HeroGeneric
