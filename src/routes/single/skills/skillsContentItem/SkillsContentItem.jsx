import React, {useEffect, useRef, useState} from 'react'
import {l, m, s, xs} from 'styles/breakpoints'

import SkillsContentItemPerspective from './SkillsContentItemPerspective'
import styled from 'styled-components'

const margin = '20px'
const calcWidth = (n) => `calc((100% - ${n - 1} * ${margin}) / ${n})`
const adjustNths = (n) => `
&:not(:nth-child(${n}n)) {
	margin-right: ${margin};
}

&:nth-child(${n}n) {
	margin-right: 0;
}
`
const SkillsContentItemLi = styled.li`
	list-style-type: none;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: ${margin};
	perspective: 1000px;

	width: ${() => calcWidth(5)};
	${() => adjustNths(5)};

	@media only screen and (max-width: 1200px) {
		width: ${() => calcWidth(4)};
		${() => adjustNths(4)};
	}

	@media only screen and (max-width: 850px) {
		width: ${() => calcWidth(3)};
		${() => adjustNths(3)};
	}

	@media only screen and (max-width: 600px) {
		min-height: ${({heightToMakeItRect}) => heightToMakeItRect && `${heightToMakeItRect}px`};
		width: ${() => calcWidth(2)};
		${() => adjustNths(2)};
	}

	@media only screen and (max-width: 400px) {
		width: ${() => calcWidth(1)};
		${() => adjustNths(1)};
	}
`

const SkillsContentItem = ({skillName, icon, color, isRandom}) => {
	const skillsContentRef = useRef()
	const [heightToMakeItRect, setHeightToMakeItRect] = useState()

	useEffect(
		() => {
			const handleResizing = () => {
				if (skillsContentRef) {
					const {current} = skillsContentRef

					if (current) {
						const {clientWidth} = current

						setHeightToMakeItRect(clientWidth)
					}
				}
			}

			window.addEventListener('resize', handleResizing)

			return () => window.removeEventListener('resize', handleResizing)
		},
		[skillsContentRef]
	)

	return (
		<SkillsContentItemLi heightToMakeItRect={heightToMakeItRect} ref={skillsContentRef}>
			<SkillsContentItemPerspective skillName={skillName} icon={icon} color={color} />
		</SkillsContentItemLi>
	)
}

export default SkillsContentItem
