import React from "react";
import { elastic as ElasticMenu } from "react-burger-menu";
import "loaders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
    };
  }
  render() {
    return (
      <div id="outer-container" style={{ height: "100%" }}>
        <div>
          <ElasticMenu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            <div>
              <img src="avatar.png" alt="" class="avatar" />
            </div>
            <a id="home" className="menu-item" href="/">
              <FontAwesomeIcon className="mx-2 ms-3" icon={faHome} /> Home
            </a>
            <a id="about" className="menu-item" href="/about">
              <FontAwesomeIcon className="mx-2 ms-3" icon={faUser} /> About
            </a>
            <a id="projects" className="menu-item" href="/projects">
              <FontAwesomeIcon className="mx-2" icon={faRocket} /> Projects
            </a>
            <a id="contact" className="menu-item" href="/contact">
              <FontAwesomeIcon className="mx-2" icon={faEnvelope} /> Contact
            </a>
          </ElasticMenu>
        </div>
        <main id="page-wrap" style={{ backgroundColor: "#131313" }}>
          {this.props.children}
        </main>
      </div>
    );
  }
}
