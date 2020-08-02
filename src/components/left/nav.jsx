import React from 'react';
import './nav.css';
import { Button, Menu } from 'antd';

const Navbar = (props) => {
  return (
    <div className="hidden md:block ">
      <ul className="ulclass flex flex-row md:flex-col md:-my-16">
        <li className="liclass md:my-16  ">
          <a
            className="inline-flex items-center hover:text-zenith transition"
            href="#projects"
          >
            <span>01</span>
            <span className="inline-block w-48 h-px mx-16 transition"></span>
            <span>Projects</span>
          </a>
        </li>
        <li className="liclass md:my-16">
          <a
            className="inline-flex items-center hover:text-zenith transition"
            href="#projects"
          >
            <span>02</span>
            <span className="inline-block w-48 h-px mx-16 transition"></span>
            <span>Skills</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
