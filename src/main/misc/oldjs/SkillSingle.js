import React from "react";

const SkillSingle = ({ data: { color, icon, skillName } }) => (
  <div>
    <i style={{ color: color }} className={icon} />
    <p>{skillName}</p>
  </div>
);

export default SkillSingle;
