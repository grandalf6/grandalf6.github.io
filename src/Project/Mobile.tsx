import React from "react";
import styled from "styled-components/macro";
import Typography from "../components/Typography";
import cms from "../assets/cms";
import { Project } from "../assets/projects";
import Flexbox from "../components/Flexbox";

type Props = Pick<Project, "mobileScreenshotSrc">;

const Mobile = ({ mobileScreenshotSrc }: Props) =>
  mobileScreenshotSrc ? (
    <Container flexDirection="column" as="section">
      <Typography textAlign="center" type="heading3">
        {cms.mobileVersionLabel}
      </Typography>
      <MobileScreenshot src={mobileScreenshotSrc} />
    </Container>
  ) : null;

const Container = styled(Flexbox)`
& > *:not(:last-child) {
   margin-bottom: ${({ theme }) =>
     `calc(1* ${theme.dimms["modules-margin-vertical-inner"]})`}};
 }
`;

const MobileScreenshot = styled.img`
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 6%);
`;

export default Mobile;
