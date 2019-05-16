import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import TitleGeneric from '../generic/TitleGeneric'

const Header = () => {
  const ELEMENTS = [
    {
      name: (
        <TitleGeneric
          type="title"
          color="light"
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
    <header id="Header" className="section">
      <div className="hero is-fullheight-with-navbar">
        <div className="hero-body">
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
        </div>
      </div>
    </header>
  )
}
export default Header
