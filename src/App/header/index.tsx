import Typography from "../../components/Typography";
import React from "react";
import cms from "../../assets/cms";
import Flexbox from "../../components/Flexbox";
import LanguageSwitch from "./LanguageSwitch";

import Avatar, { AvatarLoader } from "./Avatar";
import Box from "../../components/Box";

const Header = () => {
  const [avatarLoaded, setAvatarLoaded] = React.useState<boolean>(false);

  return (
    <Flexbox
      marginTop="30px"
      padding="20px"
      alignItems={["flex-start", "center"]}
      height={["min-content", "40px"]}
      as="header"
      flexDirection={["column", "row"]}
    >
      <Flexbox
        width="40px"
        height="40px"
        margin={["0 0 20px 0", "0 20px 0 0"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box display={avatarLoaded ? "none" : "initial"}>
          <AvatarLoader />
        </Box>
        <Box display={!avatarLoaded ? "none" : "initial"}>
          <Avatar
            width="40"
            height="40"
            src={cms.linkToHeaderAvatar}
            alt={cms.headerAvatarAlt}
            onLoad={() => setAvatarLoaded(true)}
          />
        </Box>
      </Flexbox>

      <Typography as="h1" type="heading1">
        {cms.nameAndSurname}
      </Typography>

      <LanguageSwitch />
    </Flexbox>
  );
};

export default Header;
