import AwesomeIcon from 'generics/AwesomeIcon'
import React from 'react'
import TypographyGeneric from 'generics/TypographyGeneric'
import colors from 'styles/colors'
import styled from 'styled-components'

const SkillsContentItemPerspectiveDiv = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	border: 1px solid lightgray;

	&:hover {
		transform: rotateY(180deg);
	}

	& > * {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		backface-visibility: hidden;
	}

	& > #back {
		border-color: rgba(0, 0, 0, 0.5);
		transform: rotateY(180deg);
		background: ${({color}) => color && color};
		color: ${colors.white};
		font-size: 40px;
	}
`

const SkillsContentItemPerspective = ({skillName, icon, color}) => {
	const sidesArray = [
		{
			id: 'front',
			component: <AwesomeIcon icon={icon} size="7" color={color} />
		},
		{
			id: 'back',
			component: <TypographyGeneric fontWeight="600" textTransform="uppercase" content={skillName} />
		}
	]

	return (
		<SkillsContentItemPerspectiveDiv color={color}>
			{sidesArray.map(({id, component}) => {
				return <div id={id}> {component}</div>
			})}
		</SkillsContentItemPerspectiveDiv>
	)
}

export default SkillsContentItemPerspective
