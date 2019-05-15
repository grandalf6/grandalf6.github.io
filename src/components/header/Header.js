import React from 'react'
import ButtonForHeader from './ButtonForHeader'
import TitleForHeader from './TitleForHeader'
import DescriptionForHeader from './DescriptionForHeader'

import ScrollAnimation from 'react-animate-on-scroll'

const Header = () => {
  const ELEMENTS = [
    {
      name: <TitleForHeader />,
      animation: 'fadeIn slow',
      delay: 500,
    },
    {
      name: <DescriptionForHeader />,
      animation: 'fadeIn',
      delay: 1000,
    },
    {
      name: <ButtonForHeader />,
      animation: 'fadeInUpBig',
      delay: 7100,
    },
  ]

  return (
    <header className="section">
      <div className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            {ELEMENTS.map((component, index) => (
              <div key={index} className="level level-item">
                <ScrollAnimation
                  animateIn={component.animation}
                  delay={component.delay}
                >
                  {component.name}
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
