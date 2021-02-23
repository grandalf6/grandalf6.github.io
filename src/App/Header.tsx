import Typography from "../components/Typography";
import React from "react";
import styled from "styled-components/macro";
import cms from "../assets/cms";
import Flexbox from "../components/Flexbox";

const Header = () => (
  <Flexbox
    marginTop="30px"
    padding="20px"
    alignItems={["flex-start", "center"]}
    height={["min-content", "40px"]}
    as="header"
    flexDirection={["column", "row"]}
  >
    <AvatarWrapper
      width="40px"
      height="40px"
      margin={["0 0 20px 0", "0 20px 0 0"]}
      justifyContent="center"
      alignItems="center"
    >
      <Avatar src={cms.linkToHeaderAvatar} />
    </AvatarWrapper>
    <Typography as="h1" type="heading1">
      {cms.nameAndSurname}
    </Typography>
  </Flexbox>
);

const AvatarWrapper = styled(Flexbox)``;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: lightgray;
  object-position: center;
`;

export default Header;
