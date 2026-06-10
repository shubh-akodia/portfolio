function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img
        src={project.image}
        alt={project.title}
        className="card-image"
      />

      <div className="card-info">
        <h3>{project.title}</h3>

        <p>{project.tech}</p>

        <button className="view-btn">
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;