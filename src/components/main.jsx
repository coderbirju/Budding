import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Home from './left/home';
import Details from './right/details'
import './main.css'

class mainComponent extends Component {
    state = {  }
    render() {
        return (
            <div className="main-body">
                <Row>
                    <Col span={12}>
                    <Home/>
                    </Col>
                    <Col span={12}><Details/></Col>
                </Row>

            </div>
          );
    }
}

export default mainComponent;