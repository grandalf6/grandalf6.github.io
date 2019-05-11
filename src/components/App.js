import React, { Component } from "react";
import Loader from "./Loader";
import Main from "./Main";

class App extends Component {
  menuClick = () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("menuPop").style.display = "flex";
  };

  menuLinkClick = () => {
    document.getElementById("main").style.display = "block";
    document.getElementById("menuPop").style.display = "none";
  };

  handleTimer = () => {
    setTimeout(this.showPage, 2000);
  };

  showPage = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
  };

  render() {
    return (
      <div onLoad={this.handleTimer()}>
        <Loader />
        <Main />
      </div>
    );
  }
}

export default App;
