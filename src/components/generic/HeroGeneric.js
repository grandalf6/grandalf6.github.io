import React from 'react'
import styled from 'styled-components'

const HeroGenericDiv = styled.div`
	background: ${({background}) => background && background};
	width: 100vw;
	height: ${({isFullHeight}) => (isFullHeight ? '100vh' : '75vh')};
	border: 1px solid green;
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
