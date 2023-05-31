import React from "react";
import { NavigationRailDark } from "../../components/nav_rail/nav_rail";
import Post from "../../components/Post/Post";
import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main_body_component">
        <NavigationRailDark />
        <div className="posts_body">
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default Main;
