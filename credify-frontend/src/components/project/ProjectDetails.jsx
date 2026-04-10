const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
    </div>
  );
};

export default ProjectDetails;