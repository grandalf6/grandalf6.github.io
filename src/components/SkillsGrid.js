import React from "react";
import SkillSingle from "./SkillSingle";
import SKILLS_DATA from "../assets/data/SKILLS_DATA";

function SkillsGrid() {
  return (
    <div>
      <div className="skillsGrid">
        {SKILLS_DATA.map(x => (
          <SkillSingle
            skillName={x.skillName}
            icon={x.icon}
            color={x.color}
            key={x.skillName}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsGrid;
