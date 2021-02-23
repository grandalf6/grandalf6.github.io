import React from "react";
import styled from "styled-components/macro";
import { Project } from "../assets/projects";
import Flexbox from "../components/Flexbox";

type Props = Pick<Project, "mobileScreenshotSrc">;

const Mobile2 = ({ mobileScreenshotSrc }: Props) =>
  mobileScreenshotSrc ? (
    <Container as="section" justifyContent="space-between" alignItems="center">
      {[0, 0, 0].map(() => (
        <Flexbox width="25%" marginBottom="0 !important">
          <MobileScreenshot src={mobileScreenshotSrc} />
        </Flexbox>
      ))}
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
  width: 100%;
  height: auto;
`;

export default Mobile2;
