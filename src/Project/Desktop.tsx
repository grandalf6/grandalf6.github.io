import React from "react";
import styled from "styled-components/macro";
import { Project } from "../assets/projects";
import Flexbox from "../components/Flexbox";

type Props = Pick<Project, "desktopScreenshotSrc">;

const Desktop = ({ desktopScreenshotSrc }: Props) =>
  desktopScreenshotSrc ? (
    <Container flexDirection="column" as="section">
      {/* <Typography textAlign="center" type="heading3">
        {cms.desktopVersionLabel}
      </Typography> */}
      <DesktopScreenshot src={desktopScreenshotSrc} />
    </Container>
  ) : null;

const Container = styled(Flexbox)`
 & > *:not(:last-child) {
    margin-bottom: ${({ theme }) =>
      `calc(1* ${theme.dimms["modules-margin-vertical-inner"]})`}};
  }
`;

const DesktopScreenshot = styled.img`
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 6%);
`;

export default Desktop;
