import React, { useState } from "react";
import styled from "styled-components";
import { Project } from "../assets/projects";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import Typography from "../components/Typography";

type Props = Pick<Project, "imageSrc" | "title">;

const Hero = ({ imageSrc, title }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Flexbox
      width="100%"
      height="500px"
      background="lightgray"
      position="relative"
      padding="20px"
      alignItems="flex-end"
      justifyContent="flex-end"
      as="header"
    >
      <Box
        width="100%"
        height="100%"
        position="absolute"
        bottom={0}
        left={0}
        zIndex={0}
      >
        <Background
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          src={imageSrc}
          imageLoaded={imageLoaded}
        />
      </Box>
      <Flexbox zIndex={2}>
        <Typography
          textAlign="right"
          type="heading2"
          children={title}
        ></Typography>
      </Flexbox>
    </Flexbox>
  );
};

type BackgroundProps = {
  imageLoaded: boolean;
};

const Background = styled.img<BackgroundProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${({ imageLoaded }) => (imageLoaded ? 1 : 0)};
  transition: opacity 0.25s;
`;

export default Hero;
