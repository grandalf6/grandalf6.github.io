import React from "react";
import styled from "styled-components/macro";
import { Project } from "../assets/projects";
import Flexbox from "../components/Flexbox";

import Typography from "../components/Typography";
import cms from "../assets/cms";
import Box from "../components/Box";

type Props = Pick<Project, "mobileScreenshots">;

const Mobile = ({ mobileScreenshots }: Props) =>
  mobileScreenshots ? (
    <Flexbox as="section" alignItems="center" flexDirection="column">
      <Box marginBottom="modules-margin-vertical">
        <Typography textAlign="center" type="heading3">
          {cms.mobileVersionLabel}
        </Typography>
      </Box>
      <Flexbox
        justifyContent="space-between"
        alignItems="center"
        flexDirection={["column", "row"]}
      >
        {mobileScreenshots.map((screenshot, index) => (
          <Flexbox
            width={["75%", "25%"]}
            marginBottom={[
              index !== mobileScreenshots.length - 1
                ? "modules-margin-vertical-inner"
                : 0,
              0,
            ]}
          >
            <MobileScreenshot src={screenshot} />
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  ) : null;

const MobileScreenshot = styled.img`
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 6%);
  width: 100%;
  height: auto;
`;

export default Mobile;
