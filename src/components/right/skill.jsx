import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import {} from "@fortawesome/free-brands-svg-icons";
import "./skill.css";
import SkillCard from './skillCard';

const Skill = (props) => {
  let renderComp;
  if (props.skills != null) {
    renderComp = props.skills.map((skill) => (
      <SkillCard key={skill.skill_name} skill={skill} />
    ));
  } else {
    renderComp = <div> Loading </div>;
  }
  return (
    <div className="s-body">
      <Row gutter={[8, 8]}>

        {renderComp}
    </Row>

    </div>
  );
};

export default Skill;
