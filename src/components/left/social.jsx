import React from "react";
// import 'antd/dist/antd.css';
import "./social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faInstagramSquare,
  faTwitter,
  faSpotify,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import profileImg from "./static/avatar.png";

const Social = (props) => {
  return (
    <div className="social-div">
      <div className="content-holder">
        <img src={profileImg} alt="ProfilePic" className="social-avatar" />
        <span className="social-span">
          <ul className="social-ul">
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={props.social ? props.social.github : "#"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={props.social ? props.social.linkedIn : "#"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={
                  props.social
                    ? props.social.email
                      ? props.social.email
                      : "#"
                    : "#"
                }
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={props.social ? props.social.instagram : "#"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={props.social ? props.social.twitter : "#"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={props.social ? props.social.spotify : "#"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </li>
            <li className="social-li">
              <a
                className="social-a"
                target="_blank"
                href={props.social ? props.social.soundcloud : "#"}
                rel="noopener noreferrer"
              >
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
