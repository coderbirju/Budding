import React, { Component } from 'react';
import 'antd/dist/antd.css';
import ProjectCard from './project';
import SkillCard from './skill';
import './details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
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
    // if this.props.selectedstate = project return ProjectCard, else show skillCard
    return (
      <div>
        <div ref={this.myRef}>
          <ProjectCard projects={this.props ? this.props.project : null} />
        </div>

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />

        <div ref={this.textInput}>
          <SkillCard />
        </div>

        {/* ref={(skill) => (this.props.selectedState = skill)} */}
      </div>
    );
  }
}

export default Details;
