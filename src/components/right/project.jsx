import React from 'react';
import ProCard from './proCard';
import './project.css';

const ProjectCard = (props) => {
  let renderComp;
  if (props.projects != null) {
    renderComp = props.projects.map((project) => (
      <ProCard key={project.name} project={project} />
    ));
  } else {
    renderComp = <div> Loading </div>;
  }
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
      {renderComp}
    </div>
  );
};

export default ProjectCard;
