import './styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a full-stack developer with expertise in modern web technologies.</p>
            <h3>Skills:</h3>
            <ul className="skills-list">
              <li>JavaScript/React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;