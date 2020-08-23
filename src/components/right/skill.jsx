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
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <div>
            <Card bordered={false} className="s-card-body">
              <div className="s-icon">
                <FontAwesomeIcon icon={faPython} />
              </div>
              <h1 className="s-heading">Python</h1>
              <p className="s-desc">
                Transfer source files, artifacts and static files to digital a DigitalOcean droplet. Artifacts and static file
              </p>
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faJava} />
            </div>
            <h1 className="s-heading">Java</h1>
            <p className="s-desc">Transfer source files, artifacts and static files to digital a
                DigitalOcean droplet. Artifacts and static file</p>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <h1 className="s-heading">Javascript</h1>
            <p className="s-desc">
                Transfer source files, artifacts and static files to digital a
                DigitalOcean droplet. Artifacts and static file
              </p>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className="s-card-body">
            <div className="s-icon">
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <h1 className="s-heading">FinalCutPro X</h1>
            <p className="s-desc">
                Transfer source files, artifacts and static files to digital a
                DigitalOcean droplet. Artifacts and static file
              </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SkillCard;
