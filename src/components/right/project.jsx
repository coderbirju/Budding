import React, { Component } from "react";
import { Card } from "antd";
import "./project.css";

const ProjectCard = () => {
  return (
    <Card className="p-card-body">
      <a href="" target="_blank">
        <p className="p-top-tag">javascript</p>
        <h2 className="p-tag-heading">Dinero.js</h2>
        <p className="p-desc">
          An immutable JavaScript library to create, calculate and format money.
        </p>
        <div>
          <div></div>
          <span>36564</span>
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
