import React from "react";
import SkillSingle from "./SkillSingle";
import SKILLS_DATA from "../assets/data/SKILLS_DATA";

const SkillsGrid = () => (
  <div className="skillsGrid">
    {SKILLS_DATA.map(x => (
      <SkillSingle data={x} key={x.skillName} />
    ))}
  </div>
);

export default SkillsGrid;
