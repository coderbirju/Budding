import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Home from './left/home';
import Details from './right/details'

class mainComponent extends Component {
    state = {  }
    render() {
        return (
            <div>
            <Home/>
            <Details/>
            </div>
          );
    }
}

export default mainComponent;