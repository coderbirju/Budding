import React, { Component } from "react";
import Navbar from "./nav";
import Social from "./social";
import Home from "./home"


class Info extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div sm={24} md={24} lg={24} className="info-holder">
        <div>
          <Home Intro={this.props ? this.props.intro: null}/>
          {/* <Navbar/> */}
        </div>
        <Social social={this.props ? this.props.social: null} />
      </div>
    );
  }
}

export default Info;
