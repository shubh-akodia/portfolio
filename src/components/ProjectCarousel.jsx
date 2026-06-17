import React from "react";

const ProjectCarousel = ({ projects, onSelect }) => {
  return (
    <div className="carousel-container">
      <h2 className="section-title">My Projects</h2>

      <div className="carousel">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => onSelect(project)}
          >
            <img src={project.image} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>Click to view</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;