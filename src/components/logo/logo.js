import React from "react";
import "./logo.css";
import logoImage from "../../images/creddit-high-resolution-logo-color-on-transparent-background.png";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={logoImage} alt="Creddit" />
      </div>
    );
  }
}

export default Logo;
