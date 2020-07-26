import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import ProjectCard from "./project";
import SkillCard from "./skill"

class Details extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Details</h1>
        <ProjectCard />
        <SkillCard />
      </div>
    );
  }
}

export default Details;
