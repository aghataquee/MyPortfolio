import './styles/Projects.css';



const Projects = () => {
  return (
    <div className="cards">
                    <h2>Projects</h2>
                    {/* MERN Projects */}
                    <div className="card">
                        <h3>Social Media App</h3>
                        <p>A Facebook-like platform with real-time posts, user authentication, and interactive comments.</p>
                        <h4>Tech Stack: MongoDB, Express.js, React, Node.js, Redux, JWT.</h4>
                        <div className="project-links">
                            <a href="https://github.com/aghataquee/SocialMedia"><button>GitHub Repo</button></a>
                            <a href="[LIVE_DEMO_LINK]" target="_blank" rel="noopener noreferrer"><button>Live Demo</button></a>
                        </div>
                    </div>
                    
                    <div className="card">
                        <h3>Learning Management System</h3>
                        <p>RESTful API for an LMS with course enrollment, admin dashboards, and payment integration.</p>
                        <h4>Tech Stack: Node.js, Express.js, MongoDB, Stripe API, JWT.</h4>
                        <div className="project-links">
                            <a href="https://github.com/aghataquee/LMS"><button>GitHub Repo</button></a>
                        </div>
                    </div>
                    
                    {/* WordPress Projects */}
                    <div className="card">
                        <h3>E-Commerce Website</h3>
                        <p>Fully functional WooCommerce store with custom theme, payment integration, and product management.</p>
                        <h4>Tech Stack: WordPress, WooCommerce, PHP, Elementor, CSS.</h4>
                        <div className="project-links"></div>
                        <a href="https://kisanmango.com/" target="_blank" rel="noopener noreferrer"><button>View Website</button></a>
                    </div>
                    <div className="card">
                        <h3>Business Portfolio Site</h3>
                        <p>Custom WordPress theme development for a client with blog functionality and contact forms.</p>
                        <h4>Tech Stack: WordPress, Custom Theme Development, PHP, JavaScript.</h4>
                        <div className="project-links">
                            <a href="https://realestatez.in/" target="_blank" rel="noopener noreferrer"><button>View Website</button></a>
                        </div>
                    </div>
                
            
        </div>
  );
};

export default Projects;