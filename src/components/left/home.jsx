import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import Navbar from './nav';
import Social from './social';

const Home = (props) => {
  console.log('props: ', props);
  return (
    <div>
      <div xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <h1 className="p-tag-heading text-2xl font-bold leading-tight">
          Hello, I'm <br />
          {props.intro ? props.intro.heading : 'Loading'}.
        </h1>
        <p className="p-top-tag">
          {props.intro ? props.intro.desc : 'Loading'}
        </p>
      </div>

      <Navbar setNavState={props.setNavState} />
      <Social social={props.social} />
    </div>
  );
};

export default Home;
