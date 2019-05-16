import React from "react";
import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";
import PROJECTS_DATA from "../assets/data/PROJECTS_DATA";

const Projects = () => (
  <section>
    <SectionTitle sectionName="Projects" />
    {PROJECTS_DATA.map(x => (
      <SingleProject data={x} key={x.name} />
    ))}
  </section>
);

export default Projects;
