import React from 'react'
import LevelGeneric from '../generic/LevelGeneric'
import ScrollAnimation from 'react-animate-on-scroll'
import SectionGeneric from '../generic/SectionGeneric'
import SectionTitle from '../generic/SectionTitle'
import SelfDescription from './SelfDescription'
import Skills from './skills/Skills'
import TitleGeneric from '../generic/TitleGeneric'

const About = () => {
  const ELEMENTS = [
    {
      component: <LevelGeneric content={<SelfDescription />} />,
      animation: 'fadeInDown',
    },
    {
      component: <hr />,
      animation: 'fadeIn slow delay-1s',
    },
    {
      component: <Skills />,
      animation: 'fadeIn slow delay-1s',
    },
    {
      component: <hr />,
      animation: 'fadeIn slower delay-1s',
    },
    {
      component: (
        <TitleGeneric
          align="centered"
          type="title"
          text="check out my recent projects below"
          transformation="uppercase"
        />
      ),
      animation: 'fadeIn slower delay-1s',
    },
  ]
  return (
    <SectionGeneric
      name="About"
      content={
        <div className="hero is-fullheight-with-navbar">
          <SectionTitle title="About me" />
          <div className="hero-body">
            <div className="container is-fluid">
              {ELEMENTS.map((element, index) => {
                const {component, animation} = element
                return (
                  <ScrollAnimation
                    key={index}
                    animateIn={animation}
                    animateOut="fadeOut"
                  >
                    {component}
                  </ScrollAnimation>
                )
              })}
            </div>
          </div>
        </div>
      }
    />
  )
}
export default About
