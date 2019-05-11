import React from "react";
import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";
import PROJECTS_DATA from "../assets/data/PROJECTS_DATA";

function Projects() {
  return (
    <div>
      <section>
        <SectionTitle sectionName="Projects" />
        {PROJECTS_DATA.map(x => (
          <SingleProject
            name={x.name}
            file={x.file}
            description={x.description}
            link={x.link}
            repo={x.repo}
            key={x.name}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
