import PROJECTS_DATA from 'assets/data/PROJECTS_DATA'
import React from 'react'
import SectionGeneric from 'generic/pageSectionGeneric/PageSectionGeneric'
import SingleProject from './SingleProject'
import SvgFooter from './SvgFooter'
import mountain from 'assets/images/svg/mountain.svg'
import tree from 'assets/images/svg/tree.svg'

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
        <SvgFooter />
      </>
    }
  />
)

export default Projects
