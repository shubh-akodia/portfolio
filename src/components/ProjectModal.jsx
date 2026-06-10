function ProjectModal({ project, closeModal }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-btn" onClick={closeModal}>
          ✖
        </span>

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />

        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectModal;