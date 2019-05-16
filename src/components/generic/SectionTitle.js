import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import TitleGeneric from '../generic/TitleGeneric'

const SectionTitle = ({title}) => (
  <div className="hero-head">
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={50}>
      <TitleGeneric type="title" text={title} />
    </ScrollAnimation>
  </div>
)

export default SectionTitle
