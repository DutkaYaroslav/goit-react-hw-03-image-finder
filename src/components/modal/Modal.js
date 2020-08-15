import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // getPicture = () => {
  //   return this.props.bigImg();
  // };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.bigImg()} alt="" />
        </div>
      </div>
    );
  }
}
