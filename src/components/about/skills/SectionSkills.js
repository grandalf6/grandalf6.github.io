import React from 'react'
import SingleSkill from '../SingleSkill'
import SKILLS_DATA from '../../../assets/data/SKILLS_DATA'
import TitleGeneric from '../../generic/TitleGeneric'
import LevelGeneric from '../../generic/LevelGeneric'

import LevelItemGeneric from '../../generic/LevelItemGeneric'

const SectionSkills = ({type}) => (
  <div className="container is-fluid">
    <LevelGeneric
      content={[
        <TitleGeneric
          align="centered"
          bold="bold"
          text={type}
          transformation="uppercase"
          type="subtitle"
        />,
        <LevelGeneric
          mobile={true}
          content={SKILLS_DATA.filter((item) => item.type === type).map(
            (item, index) => (
              <SingleSkill key={index} data={item} />
            ),
          )}
        />,
      ].map((element, index) => (
        <LevelItemGeneric key={index} content={element} />
      ))}
    />
  </div>
)

export default SectionSkills
