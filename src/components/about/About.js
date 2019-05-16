import React from 'react'
import HeroGeneric from '../generic/HeroGeneric'
import LevelGeneric from '../generic/LevelGeneric'
import ScrollAnimation from 'react-animate-on-scroll'
import SectionGeneric from '../generic/SectionGeneric'
import SelfDescription from './SelfDescription'
import Skills from './skills/Skills'
import TitleGeneric from '../generic/TitleGeneric'

const About = () => {
  const ELEMENTS = [
    {
      component: <LevelGeneric content={<SelfDescription />} />,
      animation: 'fadeInUpBig',
    },
    {
      component: <hr />,
      animation: 'fadeIn',
    },
    {
      component: <Skills />,
      animation: 'fadeIn slow delay-1s',
    },
  ]
  return (
    <SectionGeneric
      name="About"
      colorOfTitle="dark"
      colorOfBackground="white"
      contentOfBody={
        <div className="container is-fluid">
          {ELEMENTS.map((element, index) => {
            const {component, animation} = element
            return (
              <ScrollAnimation
                key={index}
                animateIn="
                fadeInUpBig"
                animateOut="fadeOut"
              >
                {component}
              </ScrollAnimation>
            )
          })}
        </div>
      }
    />
  )
}
export default About
