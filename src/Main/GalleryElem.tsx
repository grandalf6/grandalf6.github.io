import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import Loader from "../components/Loader";

type Props = {
  title: string;
  gridArea: string;
  imageSrc: string;
};

const GalleryElem = ({ title, gridArea, imageSrc }: Props) => {
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false);

  return (
    <Container
      to={`/projects/${title.replace(" ", "_")}`}
      tabIndex={0}
      gridArea={gridArea}
    >
      <Box display={imageLoaded ? "initial" : "none"}>
        <Background width="100%" height="100%">
          <Image src={imageSrc} onLoad={() => setImageLoaded(true)} />
        </Background>
        <Flexbox zIndex={2} position="absolute" right="10px" bottom="10px">
          <Typography
            as="span"
            type="tileTitle"
            textAlign="right"
            children={title}
          />
        </Flexbox>
      </Box>
      <Box display={!imageLoaded ? "initial" : "none"}>
        <GalleryElemLoader />
      </Box>
    </Container>
  );
};

type ContainerProps = Pick<Props, "gridArea">;
const Container = styled(Link)<ContainerProps>`
  cursor: pointer;
  width: 100%;
  height: 100%;
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

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  transform: scale(1.1, 1.1);
  transition: transform 1s;
`;

const GalleryElemLoader = () => {
  return (
    <Loader width={200} height={150} max>
      <rect x="0" y="0" width="100%" height="150"></rect>
    </Loader>
  );
};

export { GalleryElemLoader };
export default GalleryElem;
