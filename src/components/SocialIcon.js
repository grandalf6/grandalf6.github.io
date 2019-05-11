import React from "react";

const SocialIcon = ({ data: { icon, link } }) => (
  <li className="nav-item">
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <i className={icon} />
    </a>
  </li>
);

export default SocialIcon;
