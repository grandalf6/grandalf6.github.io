import React from 'react'
import TitleGeneric from '../generic/TitleGeneric'

const CardContent = ({description, name}) => (
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <TitleGeneric align="centered" size={6} type="title" text={name} />
      </div>
    </div>

    <div className="content">{description}</div>
  </div>
)

export default CardContent
