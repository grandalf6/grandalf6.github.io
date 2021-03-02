import React from "react";
import Link from "../components/Link";
import cms from "../assets/cms";
import Flexbox from "../components/Flexbox";

const Back = () => {
  return (
    <Flexbox alignSelf="flex-start" padding="0 20px">
      <Link isRouter to="/" children={cms.backButtonLabel}></Link>
    </Flexbox>
  );
};

export default Back;
