import React from "react";
import ArrowDown from "./ArrowDown";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = props => (
  <div id="main">
    <Header />
    <ArrowDown />
    <Skills />
    <Projects />
    <Footer />
  </div>
);

export default Main;
