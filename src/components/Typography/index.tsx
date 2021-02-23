import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { color, ColorProps, typography, TypographyProps } from "styled-system";

type Props = {
  children: ReactNode;
  type: TextType;
  as?: string | React.ComponentType<any>;
} & TypographyProps;

const Typography = ({ as = "span", children, type, ...props }: Props) => {
  const textAttrs = textTypes[type];

  return (
    <Container as={as} {...textAttrs} {...props}>
      {children}
    </Container>
  );
};

type StyledProps = TypographyProps & ColorProps;

const Container = styled.span<StyledProps>`
  ${typography}
  ${color}
`;

const textTypes = {
  heading1: {
    color: "page-header-title-color",
    fontSize: "25px",
    fontWeight: 400,
  },
  heading2: {
    color: "text-color-000",
    fontSize: "32px",
    fontWeight: 700,
  },
  heading3: {
    color: "page-header-title-color",
    fontSize: "24px",
    fontWeight: 700,
  },
  heading4: {
    color: "text-color-300",
    fontSize: "14px",
    fontWeight: 400,
  },
  intro: {
    color: "text-color-200",
    fontSize: "18px",
  },
  introSmall: {
    color: "text-color-200",
    fontSize: "16px",
  },
  side: {
    color: "text-color-100",
    fontSize: "13.6px",
  },
  tileTitle: {
    color: "text-color-000",
    fontSize: "16px",
    fontWeight: 500,
  },
};

type TextType = keyof typeof textTypes;

export default Typography;
