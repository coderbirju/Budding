import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Info from './left/info';
import Details from './right/details';
import './main.css';
import axios from '../axios';
import Loader from 'react-loader';

var options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.0,
  corners: 1,
  color: '#000',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute',
};
class mainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Intro: null,
      nav: null,
      social: null,
      project: null,
      skill: null,
      selectedState: 'project',
      loaded: false,
    };
    this.setNavState = this.setNavState.bind(this);
  }
  getHomeData() {
    axios
      .get('home')
      .then((res) => {
        const data = res.data;
        this.setState({ Intro: data.home[0] });
        this.setState((prev, next) => {
          prev.loaded = prev.Intro && prev.project ? true : false;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getContactData() {
    axios
      .get('contact')
      .then((res) => {
        const data = res.data;
        this.setState({ social: data.social_contact[0], nav: 'Arjun' });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProjectData() {
    axios
      .get('project')
      .then((res) => {
        const data = res.data;
        this.setState({ project: data.projects });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSkillData() {
    axios
      .get('skill')
      .then((res) => {
        const data = res.data;
        this.setState({
          skill: data.skills,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setNavState(selectedState) {
    this.setState({
      selectedState,
    });
  }
  componentDidMount() {
    this.getProjectData();
    this.getHomeData();
    this.getContactData();
    this.getSkillData();
  }

  render() {
    return (
      <div className='cover-container d-flex w-100 h-100 mx-auto flex-column'>
        <Loader loaded={this.state.loaded} options={options}>
        <Row className='row-100'>
          <Col md={12} className='main-home'>
          <Info
                name={this.state.nav}
                intro={this.state.Intro}
                social={this.state.social}
                setNavState={this.setNavState}
              />
          </Col>
          <Col md={12} className='main-detail'>
            <Details
                project={this.state.project}
                skill={this.state.skill}
                selectedState={this.state.selectedState}
              />
          </Col>
        </Row>
        </Loader>
      </div>
    );
  }
}

export default mainComponent;
