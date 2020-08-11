import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card } from "antd";
import "./project.css";

const ProjectCard = () => {
  return (
    <Card className="p-card-body">
      <a href="" target="_blank">
        <p className="p-top-tag">j a v a s c r i p t</p>
        <h2 className="p-tag-heading">Dinero.js</h2>
        <p className="p-desc">
          An immutable Javascript library to create, calculate and format money.
        </p>
        <div className="p-stars">
          <FontAwesomeIcon className="p-star-icon" icon={faStar} />
          <span className="p-star-number">1,425</span>
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
