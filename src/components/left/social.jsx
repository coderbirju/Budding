import React from 'react';
// import 'antd/dist/antd.css';
import './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faInstagramSquare,
  faTwitter,
  faSpotify,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import profileImg from './static/avatar.png';

const Social = (props) => {
  return (
    <div>
      <div className="p-stars">
        <img src={profileImg} alt="ProfilePic" className="avatar" />
        <span className="p-star-number">
          <ul>
            <li>
              <a href={props.social ? props.social.github : '#'}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href={props.social ? props.social.linkedIn : '#'}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href={
                  props.social
                    ? props.social.email
                      ? props.social.email
                      : '#'
                    : '#'
                }
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
            <li>
              <a href={props.social ? props.social.instagram : '#'}>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
            <li>
              <a href={props.social ? props.social.twitter : '#'}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href={props.social ? props.social.spotify : '#'}>
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </li>
            <li>
              <a href={props.social ? props.social.soundcloud : '#'}>
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Social;
