import mountain from '../../assets/images/svg/mountain.svg'
import PROJECTS_DATA from '../../assets/data/PROJECTS_DATA'
import React from 'react'
import SectionGeneric from '../generic/SectionGeneric'
import SingleProject from './SingleProject'
import tree from '../../assets/images/svg/tree.svg'

const Projects = () => (
  <SectionGeneric
    name="Projects"
    colorOfBackground="hsl(0, 0%, 98%)"
    contentOfBody={
      <>
        <div className="tile is-ancestor">
          {PROJECTS_DATA.map((project) => (
            <SingleProject key={project.file} data={project} />
          ))}
        </div>
        <img
          id="mountainFooter"
          src={mountain}
          alt="mountain picture yellow outline"
        />
        <img id="treeFooter" src={tree} alt="tree picture yellow outline" />
      </>
    }
  />
)

export default Projects
