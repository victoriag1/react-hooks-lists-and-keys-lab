import React from "react";

function ProjectItem({ project:{name, about, technologies} }) {
  const technologyList = technologies.map((technologies)=> {
    <span key={technologies}>{technologies}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyList}</div>
    </div>
  );
}

export default ProjectItem;
