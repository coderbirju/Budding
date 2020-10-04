import React from "react";
import { Card, Col } from "antd";
import {} from "@fortawesome/free-brands-svg-icons";
import "./skill.css";

const SkillCard = (prop) => {
  return (
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
    <div className='s-card-div' style={{transform: prop.skill.card_style}}>
      <a href={prop.skill.link} target="_blank" rel="noopener noreferrer">
        <Card bordered={false} className="s-card-body">
          <div className="s-icon">
            {/* <FontAwesomeIcon icon={prop.skill.logo} /> */}
            <i className={prop.skill.logo}></i>
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
