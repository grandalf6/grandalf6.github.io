import React from "react"
import posed from "react-pose"

class Animation extends React.Component {
	state = { isVisible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 2000);
  }

  render() {
    return (
      this.state.isVisible && [
        <div key="shade" className="shade" />,
        <div key="modal" className="modal" />
      ]
    );
  }
}
	


export default Animation