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
            <span className="nav-number">01</span>
            <span className="nav-line"></span>
            <span className="nav-number ">Project</span>
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-a nav-transition"
            onClick={() => props.setNavState('skill')}
          >
            <span className="nav-number">02</span>
            <span className="nav-line"></span>
            <span className="nav-number">Skills</span>
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-a nav-transition"
            onClick={() => props.setNavState('resume')}
          >
            <span className="nav-number">03</span>
            <span className="nav-line"></span>
            <span className="nav-number">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
