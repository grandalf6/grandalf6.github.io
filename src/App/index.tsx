import React from "react";
import styled from "styled-components/macro";
import Flexbox from "../components/Flexbox";
import Main from "../Main";
import Header from "./header";
import { Switch, Route } from "react-router-dom";
import Project from "../Project";
import Footer from "./Footer";
import Contact from "./Contact";

const App = () => (
  <Container
    flexDirection="column"
    minHeight="110vh"
    maxWidth="920px"
    width="100%"
    // background="white"
  >
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/projects/:title">
        <Project />
      </Route>
    </Switch>
    <Contact />
    <Footer />
  </Container>
);

const Container = styled(Flexbox)`
  & > * {
    margin-bottom: 40px;
  }

  & > * {
    width: 100%;
  }
`;

export default App;
