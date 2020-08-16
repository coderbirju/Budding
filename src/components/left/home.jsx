import React from "react";
import "antd/dist/antd.css";
import "./home.css";
import Navbar from "./nav";
import Social from "./social";

const Home = (props) => {
  console.log("props: ", props);
  return (
    <div className="home_div">
      <div xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <div className="home-nav">
          <h1 className="h-tag-heading text-2xl font-bold leading-tight">
            Hello, I'm <br />
            {props.intro ? props.intro.heading : "Loading"}.
          </h1>
          <p className="desc">{props.intro ? props.intro.desc : "Loading"}</p>
          <Navbar setNavState={props.setNavState} />
        </div>
        <Social social={props.social} />
      </div>
    </div>
  );
};

export default Home;
