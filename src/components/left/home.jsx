import React from "react";
// import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import Navbar from "./nav";

const Home = (props) => {
  console.log("props: ", props);
  return (
    <div>
      <h2 className="p-tag-heading">
        {props.intro ? props.intro.heading : "Loading"}
      </h2>
      <p className="p-top-tag">{props.intro ? props.intro.desc : "Loading"}</p>

      <Navbar setNavState={props.setNavState} />
    </div>
  );
};

export default Home;
