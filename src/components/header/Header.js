import React from 'react'
import ArrowDown from '../ArrowDown'
import ButtonForHeader from './ButtonForHeader'
import DescriptionForHeader from './DescriptionForHeader'
import TitleForHeader from './TitleForHeader'

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
            {ELEMENTS.map((component, index) => {
              const {animation, delay, name} = component
              return (
                <div key={index} className="level level-item">
                  <ScrollAnimation animateIn={animation} delay={delay}>
                    {name}
                  </ScrollAnimation>
                </div>
              )
            })}
          </div>
        </div>
        <ArrowDown />
      </div>
    </header>
  )
}
export default Header
