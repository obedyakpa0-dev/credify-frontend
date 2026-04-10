import ProjectList from '../../components/project/ProjectList';

const Projects = () => {
  const projects = []; // fetch projects
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;