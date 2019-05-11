import React from "react";
import SOCIAL_DATA from "../assets/data/SOCIAL_DATA";
import SocialIcon from "./SocialIcon";

function Navbar(props) {
  return (
    <ul className="nav justify-content-end">
      {SOCIAL_DATA.map(x => (
        <SocialIcon link={x.link} icon={x.icon} key={x.name} />
      ))}
    </ul>
  );
}

export default Navbar;
