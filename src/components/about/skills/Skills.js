import React from 'react'
import SectionSkills from './SectionSkills'
import LevelGeneric from '../../generic/LevelGeneric'

const Skills = () => (
  <div>
    {['skills', 'tools'].map((type, index) => (
      <SectionSkills type={type} key={index} />
    ))}
  </div>
)

export default Skills
