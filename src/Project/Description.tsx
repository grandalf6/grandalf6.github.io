import React from "react";
import { Project } from "../assets/projects";
import Typography from "../components/Typography";

type Props = Pick<Project, "description">;

const Description = ({ description }: Props) =>
  description ? (
    <Typography textAlign="center" type="introSmall">
      {description}
    </Typography>
  ) : null;

export default Description;
