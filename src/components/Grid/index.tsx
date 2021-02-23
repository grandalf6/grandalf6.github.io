import styled from "styled-components/macro";
import Box from "../Box";
import { grid, GridProps } from "styled-system";

type Props = GridProps;

const Grid = styled(Box).attrs(() => ({
  display: "grid",
}))<Props>`
  ${grid}
`;

export default Grid;
