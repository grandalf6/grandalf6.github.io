import React from 'react'
import SingleSkill from './SingleSkill'
import SKILLS_DATA from '../../../assets/data/SKILLS_DATA'
import TitleGeneric from '../../generic/TitleGeneric'
import LevelGeneric from '../../generic/LevelGeneric'

const SectionSkills = ({type}) => (
  <div className="container is-fluid">
    <LevelGeneric
      content={[
        <LevelGeneric
          mobile={true}
          content={SKILLS_DATA.filter((item) => item.type === type).map(
            (item, index) => (
              <SingleSkill key={index} data={item} />
            ),
          )}
        />,
      ].map((element, index) => (
        <LevelGeneric item={true} key={index} content={element} />
      ))}
    />
  </div>
)

export default SectionSkills
