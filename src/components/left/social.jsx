import React from 'react';
// import 'antd/dist/antd.css';
import './social.css';

const Social = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href={props.social ? props.social.github : '#'}>
            <i class="fab fa-github"></i>Github
          </a>
        </li>
        <li>
          <a href={props.social ? props.social.linkedIn : '#'}>LinkedIn</a>
        </li>
        <li>
          <a href={props.social ? props.social.email : '#'}>Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
