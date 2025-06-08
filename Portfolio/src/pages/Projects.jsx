import './styles/Projects.css';

const projects = [
  {
    title: "E-commerce Site",
    description: "Full online store with payment integration",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Portfolio Website",
    description: "Custom portfolio design",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;