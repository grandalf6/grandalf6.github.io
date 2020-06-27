import LevelGeneric from './node_modules/generic/LevelGeneric'
import React from 'react'
import SectionSkills from './SectionSkills'

const Skills = () => <div>{['skills', 'tools'].map((type, index) => <SectionSkills type={type} key={index} />)}</div>

export default Skills
