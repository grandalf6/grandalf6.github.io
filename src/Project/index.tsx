import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import Description from "./Description";
import Desktop from "./Desktop";
import projects from "../assets/projects";
import Flexbox from "../components/Flexbox";
import Mobile from "./Mobile";
import Back from "./Back";

const Project = () => {
  const { pathname } = useLocation();
  const title = pathname.slice(pathname.lastIndexOf("/") + 1).replace("_", " ");
  const thisProject = projects.find((project) => project.title === title);

  if (!thisProject) return null;

  const {
    imageSrc,
    description,
    desktopScreenshotSrc,
    mobileScreenshots,
  } = thisProject;

  return (
    <Container flexDirection="column" as="main" alignItems="center">
      <Back />
      <Hero imageSrc={imageSrc} title={title} />
      <Description description={description} />
      <Desktop desktopScreenshotSrc={desktopScreenshotSrc} />
      <Mobile mobileScreenshots={mobileScreenshots} />
    </Container>
  );
};

const Container = styled(Flexbox)`
  & > * {
    margin-bottom: ${({ theme }) =>
      `calc(3* ${theme.space["modules-margin-vertical"]})`};

    &:first-child {
      margin-bottom: ${({ theme }) => theme.space["modules-margin-vertical"]};
    }
  }

  & > *:not(:nth-child(-n + 2)) {
    max-width: ${() => `calc(920px - 200px)`};
    width: ${() => `calc(100% - 2 * 20px)`};
  }
`;

export default Project;
