import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import TitleGeneric from '../generic/TitleGeneric'

const SectionTitle = ({color, title}) => (
  <div className="hero-head">
    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut" offset={50}>
      <TitleGeneric
        color={color ? 'color' : 'white'}
        type="title"
        text={title}
      />
    </ScrollAnimation>
  </div>
)

export default SectionTitle
