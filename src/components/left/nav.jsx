import React from "react";
import "./nav.css";
// import { menu } from 'antd'

const Navbar = (props) => {
  return (
    <div className="">
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-a nav-transition ">01 project</a>
        </li>
        <li className="nav-li">
          <a className="nav-a nav-transition">02 skills</a>
        </li>
        <li className="nav-li">
          <a className="nav-a nav-transition">03 Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
