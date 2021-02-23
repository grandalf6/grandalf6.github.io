import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

type Props = {
  title: string;
  gridArea: string;
  imageSrc: string;
};

const GalleryElem = ({ title, gridArea, imageSrc }: Props) => (
  <Container
    to={`/projects/${title.replace(" ", "_")}`}
    tabIndex={1}
    gridArea={gridArea}
  >
    <Background width="100%" height="100%" position="relative">
      <Overlay
        width="inherit"
        height="inherit"
        position="absolute"
        zIndex={1}
        left={0}
        top={0}
      />
      <Image imageSrc={imageSrc} />
    </Background>
    <Flexbox zIndex={2} position="absolute" right="10px" bottom="10px">
      <Typography
        as="span"
        type="tileTitle"
        textAlign="right"
        // textTransform="uppercase"
        children={title}
      />
    </Flexbox>
  </Container>
);

type ContainerProps = Pick<Props, "gridArea">;
const Container = styled(Link)<ContainerProps>`
  background: lightgray;
  cursor: pointer;
  width: 100%;
  height: 100%;
  // TEMP
  height: 150px;
  grid-area: ${({ gridArea }) => gridArea};
  position: relative;
  overflow: hidden;
  color: inherit;
`;

const Background = styled(Box)`
  &:hover {
    *:first-child {
      background: rgba(0, 0, 0, 0.25);
    }

    *:last-child {
      transform: scale(1, 1);
    }
  }
`;

const Overlay = styled(Box)`
  background: rgba(0, 0, 0, 0);
  transition: background 1s;
`;

type ImageProps = Pick<Props, "imageSrc">;
const Image = styled.div<ImageProps>`
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-position: center;
  background-size: cover;
  width: inherit;
  height: inherit;
  transform: scale(1.1, 1.1);
  transition: transform 1s;
`;

export default GalleryElem;
