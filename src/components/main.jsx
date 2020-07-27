import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Home from "./left/home";
import Details from "./right/details";
import "./main.css";

class mainComponent extends Component {
  state = {};
  render() {
    return (
      <Row className="main-row">
        <Col xs={24} xl={12}>
          <Home />
        </Col>
        <Col xs={24} xl={12}>
          <Details />
        </Col>
      </Row>
    );
  }
}

export default mainComponent;
