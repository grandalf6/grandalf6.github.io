import styled from "styled-components/macro";
import {
  compose,
  space,
  border,
  BorderProps,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  background,
  BackgroundProps,
} from "styled-system";

type Props = LayoutProps &
  SpaceProps &
  BorderProps &
  PositionProps &
  BackgroundProps;

const Box = styled.div<Props>`
  ${compose(layout, space, border, position, background)}
`;

export default Box;
