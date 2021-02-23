import React from "react";
import Typography from "../components/Typography";
import cms from "../assets/cms";
import Flexbox from "../components/Flexbox";

const Footer = () => (
  <Flexbox
    as="footer"
    flexDirection={["column", "row"]}
    alignItems={["flex-start", "center"]}
    justifyContent="space-between"
    padding="0 20px"
  >
    <Typography type="side">{cms.copyright}</Typography>
  </Flexbox>
);

export default Footer;
