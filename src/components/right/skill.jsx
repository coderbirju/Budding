import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import "./skill.css";

const SkillCard = () => {
  return (
    <div className="s-body">
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <div>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <h1 className="s-heading">Python</h1>
            <p className="s-desc"> Best programming language out there</p>
          </Card>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faJava} />
            </div>
            <h1 className="s-heading">Java</h1>
            <p className="s-desc"> Shittiest complex language</p>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <h1 className="s-heading">Javascript</h1>
            <p className="s-desc"> This one beats java to it.</p>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <h1 className="s-heading">FinalCutPro X</h1>
            <p className="s-desc"> Video editing never has been simpler</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SkillCard;
