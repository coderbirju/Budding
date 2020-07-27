import React, { Component } from "react";
import { Card } from "antd";
import "./skill.css";

const SkillCard = () => {
  return (
    <div>
      <Card className="s-card-body">
        <div>
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <h1 className="s-heading">Java</h1>
        <p className="s-desc"> This is the desc for blah blah blah blah </p>
      </Card>
    </div>
  );
};

export default SkillCard;
