/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './nav.css';
// import { menu } from 'antd'

const Navbar = (props) => {
  return (
    <div className="nav-ul-holder">
      <ul className="nav-ul">
        <li className="nav-li">
          <a
            className="nav-a nav-transition "
            onClick={() => props.setNavState('project')}
          >
            01 project
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-a nav-transition"
            onClick={() => props.setNavState('skill')}
          >
            02 skills
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-a nav-transition"
            onClick={() => props.setNavState('resume')}
          >
            03 Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
