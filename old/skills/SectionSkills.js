import LevelGeneric from 'generic/LevelGeneric'
import React from 'react'
import SKILLS_DATA from '../old/SKILLS_DATA'
import SingleSkill from './SingleSkill'
import TitleGeneric from 'generic/TitleGeneric'

const SectionSkills = ({type}) => (
	<div className="container is-fluid">
		<LevelGeneric
			content={[
				<LevelGeneric
					mobile={true}
					content={SKILLS_DATA.filter((item) => item.type === type).map((item, index) => (
						<SingleSkill key={index} data={item} />
					))}
				/>
			].map((element, index) => <LevelGeneric item={true} key={index} content={element} />)}
		/>
	</div>
)

export default SectionSkills
