import React from 'react'
import AwesomeIcon from '../../generic/AwesomeIcon'
import TextGeneric from '../../generic/TextGeneric'
import LevelGeneric from '../../generic/LevelGeneric'

const SingleSkill = ({data: {color, icon, skillName}}) => (
  <LevelGeneric
    item={true}
    content={
      <div className="tooltip is-tooltip-bottom" data-tooltip={skillName}>
        <AwesomeIcon size={1} icon={icon} colorOut={color} />
      </div>
    }
  />
)

export default SingleSkill
