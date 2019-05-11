import React from "react";
import SOCIAL_DATA from "../assets/data/SOCIAL_DATA";
import SocialIcon from "./SocialIcon";

const Navbar = () => (
  <ul className="nav justify-content-end">
    {SOCIAL_DATA.map(entry => (
      <SocialIcon key={entry.name} data={entry} />
    ))}
  </ul>
);

export default Navbar;
