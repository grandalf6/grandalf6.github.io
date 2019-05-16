import React from 'react'
import SectionGeneric from '../generic/SectionGeneric'
import SingleProject from './SingleProject'
import PROJECTS_DATA from '../../assets/data/PROJECTS_DATA'

const Projects = () => (
  <SectionGeneric
    name="Projects"
    colorOfBackground="gray-light"
    contentOfBody={
      <div className="tile is-ancestor">
        {PROJECTS_DATA.map((project) => (
          <SingleProject data={project} />
        ))}
      </div>
    }
  />
)

export default Projects
