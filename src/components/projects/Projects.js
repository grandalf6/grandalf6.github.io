import React from 'react'
import SectionGeneric from '../generic/SectionGeneric'
import SingleProject from './SingleProject'
import PROJECTS_DATA from '../../assets/data/PROJECTS_DATA'

const Projects = () => (
  <>
    {PROJECTS_DATA.map((project) => {
      const {color, name} = project
      return (
        <SectionGeneric
          name={name}
          colorOfBackground={color}
          contentOfBody={<SingleProject />}
        />
      )
    })}
  </>
)

export default Projects
