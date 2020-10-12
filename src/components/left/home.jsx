import React from 'react';
import 'antd/dist/antd.css';
import './home.css';


const Home = (props) => {
  return (
    <div className="home_div">
          <h1 className="h-tag-heading text-2xl font-bold leading-tight">
            Hello, I'm <br />
            {props.Intro ? props.Intro.heading : 'Loading'}.
          </h1>
          <p className="desc">{props.Intro ? props.Intro.desc : 'Loading'}</p>
    </div>
  );
};

export default Home;
