import React, { Component } from "react";
import "antd/dist/antd.css";
import ProjectCard from "./project";
import SkillCard from "./skill";
import "./details.css";

class Details extends Component {
  state = {};
  render() {
    // if this.props.selectedstate = project return ProjectCard, else show skillCard
    return (
      <div>
        <ProjectCard />
        <SkillCard />
      </div>
    );
  }
}

export default Details;
