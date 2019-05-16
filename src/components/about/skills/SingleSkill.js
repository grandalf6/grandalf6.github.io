import React from 'react'
import AwesomeIcon from '../../generic/AwesomeIcon'
import TextGeneric from '../../generic/TextGeneric'
import LevelItemGeneric from '../../generic/LevelItemGeneric'

const SingleSkill = ({data: {color, icon, skillName}}) => (
  <LevelItemGeneric
    content={
      <div className="tooltip is-tooltip-bottom" data-tooltip={skillName}>
        <AwesomeIcon size={1} icon={icon} colorOut={color} />
      </div>
    }
  />
)

export default SingleSkill
