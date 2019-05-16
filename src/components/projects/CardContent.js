import React from 'react'
import TitleGeneric from '../generic/TitleGeneric'

const CardContent = ({name}) => (
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <TitleGeneric align="centered" size={6} type="title" text={name} />
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris.
    </div>
  </div>
)

export default CardContent
