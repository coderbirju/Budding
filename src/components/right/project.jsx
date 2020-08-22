import React from 'react';
import { proCard } from './proCard';
import './project.css';

const ProjectCard = (projects) => {
  console.log('props inside project: ', projects, typeof projects);
  return (
    <div
      xs={24}
      sm={24}
      md={24}
      lg={12}
      xl={12}
      xxl={12}
      className="project-card-holder"
    >
      if (projects != null)
      {projects.map((project) => (
        <proCard key={project.id} project={project}></proCard>
      ))}
      else
      {<div> HI </div>}
    </div>
  );
};

export default ProjectCard;
