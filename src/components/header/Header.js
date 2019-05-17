import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import TitleGeneric from '../generic/TitleGeneric'
import HeroGeneric from '../generic/HeroGeneric'
import SectionGeneric from '../generic/SectionGeneric'

const Header = () => {
  const ELEMENTS = [
    {
      name: (
        <TitleGeneric
          type="title"
          color="light"
          align="centered"
          text="Hi, my name is Presh."
          size={1}
        />
      ),
      animation: 'fadeIn',
      delay: 150,
    },
    {
      name: (
        <TitleGeneric
          bold="bold"
          color="warning"
          size={6}
          text="front end web developer with react"
          transformation="uppercase"
          type="subtitle"
        />
      ),
      animation: 'fadeIn delay-1s',
    },
  ]

  return (
    <SectionGeneric
      name="Header"
      contentOfBody={
        <div className="container">
          {ELEMENTS.map((component, index) => {
            const {animation, delay, name} = component
            return (
              <ScrollAnimation
                key={index}
                animateIn={animation}
                animateOut="fadeOutUp"
                delay={delay}
              >
                <div key={index} className="level-item">
                  {name}
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      }
    />
  )
}
export default Header
