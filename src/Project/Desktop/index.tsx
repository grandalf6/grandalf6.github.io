import React from "react";
import styled from "styled-components/macro";
import { Project } from "../../assets/projects";
import Flexbox from "../../components/Flexbox";
import Features from "./Features";
import Title from "./Title";

type Props = Pick<Project, "desktopScreenshotSrc">;

const Desktop = ({ desktopScreenshotSrc }: Props) =>
  desktopScreenshotSrc ? (
    <Container flexDirection="column" as="section">
      <Title />
      <DesktopScreenshot src={desktopScreenshotSrc} />
      {/* <Features /> */}
    </Container>
  ) : null;

const Container = styled(Flexbox)`
 & > *:not(:last-child) {
    margin-bottom: ${({ theme }) =>
      `calc(1* ${theme.space["modules-margin-vertical-inner"]})`}};
  }
`;

const DesktopScreenshot = styled.img`
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 6%);
`;

export default Desktop;
