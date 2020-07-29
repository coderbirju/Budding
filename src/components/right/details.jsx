import React, { Component } from 'react';
import 'antd/dist/antd.css';
import ProjectCard from './project';
import SkillCard from './skill';

class Details extends Component {
  state = {};
  render() {
    // if this.props.selectedstate = project return ProjectCard, else show skillCard
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
