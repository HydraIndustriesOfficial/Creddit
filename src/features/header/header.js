import React from "react";
import "./header.css";
import Logo from "../../components/logo/logo";
import SearchBarDark from "../../components/searchBar/searchBar";

export class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
        <Logo />
        <SearchBarDark />
      </div>
    );
  }
}
