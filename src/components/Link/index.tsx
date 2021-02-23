import React, { ReactText } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  children: ReactText;
  to: string;
  isRouter?: boolean;
};

const Link = ({ children, to, isRouter }: Props) => {
  return (
    <Container to={to} as={isRouter ? RouterLink : undefined} href={to}>
      {children}
    </Container>
  );
};

const Container = styled.a`
  color: ${({ theme }) => theme.colors["link-color"]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors["text-color-100"]};

`;

export default Link;
