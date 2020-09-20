/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './nav.css';
// import { menu } from 'antd'

const Navbar = (props) => {
  return (
    <div className="">
      <ul className="nav-ul">
        <li className="nav-li">
          <a
            className="nav-a nav-transition hover:nav-a:hover"
            onClick={() => props.setNavState('project')}
          >
            <span className="text-xs tracking-wide">01</span>
            <span className="inline-block w-24 h-px mx-16 -mt-px group-hover:w-48 bg-dawn group-hover:bg-zenith transition"></span>
            <span className="text-xs tracking-widest uppercase">Projects</span>
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-a nav-transition"
            onClick={() => props.setNavState('skill')}
          >
            <span className="text-xs tracking-wide">02</span>
            <span className="inline-block w-24 h-px mx-16 -mt-px group-hover:w-48 bg-dawn group-hover:bg-zenith transition"></span>
            <span className="text-xs tracking-widest uppercase">skills</span>
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-a nav-transition"
            onClick={() => props.setNavState('resume')}
          >
            <span className="text-xs tracking-wide">03</span>
            <span className="inline-block w-24 h-px mx-16 -mt-px group-hover:w-48 bg-dawn group-hover:bg-zenith transition"></span>
            <span className="text-xs tracking-widest uppercase">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
