import Typography from "../components/Typography";
import React from "react";
import styled from "styled-components/macro";
import GalleryElem from "./GalleryElem";
import projects from "../assets/projects";
import cms from "../assets/cms";
import Flexbox from "../components/Flexbox";
import Grid from "../components/Grid";
import Box from "../components/Box";

const Main = () => {
  return (
    <Container flexGrow={1} as="main" flexDirection="column" padding="20px">
      <Box as="header">
        <Typography as="p" type="intro" children={cms.introText}></Typography>
      </Box>
      <Grid
        as="section"
        gridGap="20px"
        gridTemplateRows="repeat(1, 1fr)"
        gridTemplateColumns="repeat(4, 1fr)"
        gridTemplateAreas={["'a a a a' 'b b b b'", "'a a b b'"]}
      >
        {projects.map((project) => (
          <GalleryElem {...project} key={project.title} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled(Flexbox)`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space["modules-margin-vertical"]};
  }
`;

export default Main;
