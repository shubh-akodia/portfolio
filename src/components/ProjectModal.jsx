import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Image */}
        <img src={project.image} alt={project.title} className="modal-image" />

        {/* Title */}
        <h2>{project.title}</h2>

        {/* Description */}
        <p className="description">{project.description}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="modal-buttons">
  <a href={project.github} target="_blank" rel="noreferrer">
    <button className="btn github">GitHub</button>
  </a>

  <a href={project.live} target="_blank" rel="noreferrer">
    <button className="btn live">Live Demo</button>
  </a>
</div>

<button className="close-btn" onClick={onClose}>
  X
</button>
      </div>
    </div>
    
  );
};

export default ProjectModal;