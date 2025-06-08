import './styles/Home.css';
function Home(){
    return (
        <div>
           
            <div className="Hero-section">
                <div className="Hero-left-container">
                    <h1>Taquee Agha || Full Stack Web Developer</h1>
                    <h3>I build beautiful, functional websites</h3>
                    <a href="https://drive.google.com/file/d/1d-v8jPvxoMSwyIDXIZB55xuXqaYoecrn/view?usp=drive_link">
                        <button>Download MyResume</button>
                    </a>
                </div>
                <div className="Hero-right-container">
                    <img src="https://www.istockphoto.com/photo/blue-responsive-desktop-with-devices-showing-responsive-portfolio-website-gm1201169785-344356218?searchscope=image%2Cfilm" alt="Developer Illustration" />
                </div>
            </div>
            
            
            <div className="body">
            <h2>About Me</h2>
                <p>I'm a Full-Stack Web Developer specializing in building responsive, high-performance websites and applications.
                     With expertise in both modern stacks (React, Node.js, MongoDB) and WordPress, I create seamless user experiences from frontend to backend.
                      I also craft engaging content and optimize sites for speed, SEO, and scalability.</p>
                
                {/* Skills Section remains the same */}
                <div className="skills-section">
                    <h2>My Skills</h2>
                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Web Development</h3>
                            <div className="skills-grid">
                                <span className="skill-item">MERN Stack</span>
                                <span className="skill-item">WordPress</span>
                                <span className="skill-item">HTML/CSS</span>
                                <span className="skill-item">JavaScript</span>
                                <span className="skill-item">React.js</span>
                                <span className="skill-item">Node.js</span>
                                <span className="skill-item">Express.js</span>
                                <span className="skill-item">MongoDB</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Programming</h3>
                            <div className="skills-grid">
                                <span className="skill-item">C++</span>
                                <span className="skill-item">Python</span>
                                <span className="skill-item">Data Structures</span>
                                <span className="skill-item">Algorithms</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Other</h3>
                            <div className="skills-grid">
                                <span className="skill-item">SEO</span>
                                <span className="skill-item">Git/GitHub</span>
                                <span className="skill-item">Responsive Design</span>
                                <span className="skill-item">UI/UX Principles</span>
                            </div>
                        </div>
                    </div>
                </div>
                
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
                        <div className="project-links">
                            <a href="https://kisanmango.com/" target="_blank" rel="noopener noreferrer"><button>View Website</button></a>
                        </div>
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
            </div>
        </div>
    )
}
export default Home;