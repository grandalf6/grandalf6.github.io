import styled from "styled-components/macro";
import Box from "../Box";
import { flexbox, FlexboxProps } from "styled-system";

type Props = FlexboxProps;

const Flexbox = styled(Box).attrs(() => ({
  display: "flex",
}))<Props>`
  ${flexbox}
`;

export default Flexbox;
