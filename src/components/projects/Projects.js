import React from 'react'
import SectionGeneric from '../generic/SectionGeneric'
import SingleProject from './SingleProject'
import PROJECTS_DATA from '../../assets/data/PROJECTS_DATA'

const Projects = () => (
  <SectionGeneric
    name="Projects"
    colorOfBackground="hsl(0, 0%, 98%)"
    contentOfBody={
      <div className="tile is-ancestor">
        {PROJECTS_DATA.map((project) => (
          <SingleProject key={project.file} data={project} />
        ))}
      </div>
    }
  />
)

export default Projects
