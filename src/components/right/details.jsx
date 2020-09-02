import React, { Component } from 'react';
import 'antd/dist/antd.css';
import ProjectCard from './project';
import SkillCard from './skill';
import { navConst } from '../../constants';
import './details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }
  state = {};
  render() {
    const y =
      this.props.selectedState === navConst.Project
        ? 0
        : this.props.selectedState === navConst.Skill
        ? -500
        : -1000;
    const styles = {
      transform: `translateY(${y}px)`,
      transition: 'transform .2s',
    };

    return (
      <div>
        <div style={styles}>
          <ProjectCard projects={this.props ? this.props.project : null} />
        </div>
        <div style={styles}>
          <SkillCard skills={this.props ? this.props.skill: null}/>
        </div>
      </div>
    );
  }
}

export default Details;
