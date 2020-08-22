/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'antd';
import './project.css';

const proCard = (project) => {
  return (
    <Card className="p-card-body">
      <a href={project.link} target="_blank">
        <p className="p-top-tag">{project.tool}</p>
        <h2 className="p-tag-heading">{project.name}</h2>
        <p className="p-desc">{project.desc}</p>
        <div className="p-stars">
          <FontAwesomeIcon className="p-star-icon" icon={faStar} />
          <span className="p-star-number">{project.stars}</span>
        </div>
      </a>
    </Card>
  );
};

export default proCard;
