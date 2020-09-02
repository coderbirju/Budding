import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import "./skill.css";

const SkillCard = (prop) => {
  return (
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
    <div>
      <a href={prop.skill.link}>
        <Card bordered={false} className="s-card-body">
          <div className="s-icon">
            <FontAwesomeIcon icon={prop.skill.logo} />
          </div>
          <h1 className="s-heading">{prop.skill.skill_name}</h1>
          <p className="s-desc">{prop.skill.desc}</p>
        </Card>
      </a>
    </div>
    </Col>
  );
};

export default SkillCard;
