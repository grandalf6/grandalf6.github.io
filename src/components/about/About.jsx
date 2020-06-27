// import HeroGeneric from 'generic/generic2/HeroGeneric'
// import LevelGeneric from 'generic/LevelGeneric'

import React from 'react'
import SectionGeneric from 'generic/pageSectionGeneric/PageSectionGeneric'
import colors from 'styles/colors'

// import ScrollAnimation from 'react-animate-on-scroll'

// import SelfDescription from './SelfDescription'
// import Skills from './skills/Skills'


const About = () => {
	const ELEMENTS = [
		// {
		// 	component: <LevelGeneric content={<SelfDescription />} />,
		// 	animation: 'fadeInUpBig'
		// }
		// {
		//   component: <hr />,
		//   animation: 'fadeIn',
		// },
		// {
		//   component: <Skills />,
		//   animation: 'fadeIn slow delay-1s',
		// },
	]
	return (
		<SectionGeneric
			pageSectionGenericTitleContent="About"
			titleColor={colors.dark}
			background={colors.white}
			// contentOfBody={
			// 		{ELEMENTS.map((element, index) => {
			// 			const {component, animation} = element
			// 			return (
			// 				<ScrollAnimation key={index} animateIn="
			//           fadeInUpBig" animateOut="fadeOut">
			// 					{component}
			// 				</ScrollAnimation>
			// 			)
			// 		})}
			// }
		/>
	)
}
export default About
