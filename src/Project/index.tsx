import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Link from "../components/Link";
import Hero from "./Hero";
import Description from "./Description";
import Desktop from "./Desktop";
import cms from "../assets/cms";
import projects from "../assets/projects";
import Flexbox from "../components/Flexbox";
import Mobile2 from "./Mobile2";

const Project = () => {
  const { pathname } = useLocation();
  const title = pathname.slice(pathname.lastIndexOf("/") + 1).replace("_", " ");
  const thisProject = projects.find((project) => project.title === title);

  if (!thisProject) return null;

  const {
    imageSrc,
    description,
    desktopScreenshotSrc,
    mobileScreenshotSrc,
  } = thisProject;

  return (
    <Container flexDirection="column" as="main" alignItems="center">
      <Flexbox alignSelf="flex-start" padding="0 20px">
        <Link isRouter to="/" children={cms.backButtonLabel}></Link>
      </Flexbox>
      <Hero imageSrc={imageSrc} title={title} />
      <Description description={description} />
      <Desktop desktopScreenshotSrc={desktopScreenshotSrc} />
      <Mobile2 mobileScreenshotSrc={mobileScreenshotSrc} />
    </Container>
  );
};

const Container = styled(Flexbox)`
  & > * {
    margin-bottom: ${({ theme }) =>
      `calc(3* ${theme.dimms["modules-margin-vertical"]})`};

    &:first-child {
      margin-bottom: ${({ theme }) => theme.dimms["modules-margin-vertical"]};
    }
  }

  & > *:not(:nth-child(-n + 2)) {
    max-width: ${() => `calc(920px - 200px)`};
    width: ${() => `calc(100% - 2 * 20px)`};
  }
`;

export default Project;
