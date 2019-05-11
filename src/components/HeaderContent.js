import React from "react";
import ContactButton from "./ContactButton";
import SelfDescription from "./SelfDescription";

const HeaderContent = () => (
  <div id="headerContent">
    <p id="text-hi">Hi, my name is Presh.</p>
    <SelfDescription />
    <ContactButton />
  </div>
);

export default HeaderContent;
