import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Home from './left/home';
import Details from './right/details';
import './main.css';
import axios from '../axios';

class mainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Intro: null,
      nav: null,
      social: null,
      selectedState: 'project',
    };
  }
  getHomeData() {
    axios
      .get('home')
      .then((res) => {
        const data = res.data;
        this.setState({ Intro: data.projects[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getIntroData() {
    axios
      .get('contact')
      .then((res) => {
        const data = res.data;
        this.setState({ social: data, nav: 'Arjun' });
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
    this.getHomeData();
    this.getIntroData();
  }

  render() {
    return (
      <div className="main-body">
        <Row>
          <Col span={12}>
            <Home
              name={this.state.nav}
              intro={this.state.Intro}
              social={this.state.social}
              setNavState={this.state.setNavState}
            />
          </Col>
          <Col span={12}>
            <Details selectedState={this.state.selectedState} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default mainComponent;
