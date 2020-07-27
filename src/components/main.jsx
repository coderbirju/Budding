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
        this.setState({ social: data });
      })
      .catch((error) => {
        console.log(error);
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
            <Home intro={this.state.Intro} social={this.state.social} />
          </Col>
          <Col span={12}>
            <Details />
          </Col>
        </Row>
      </div>
    );
  }
}

export default mainComponent;
