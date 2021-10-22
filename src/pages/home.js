import topImage from "../Illustrator3.png";
import projectImage from "../Illustration4.png";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import skills from "../Component-skills.svg";
import tooly from "../tooly.png";

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventLinstener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-page">
      <div className="top-container">
        <div style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          <Fade bottom>
            <h1>I am a Front-end developer with a background in design.</h1>
          </Fade>
          <Fade top>
            <img src={topImage} alt={topImage} />
          </Fade>
        </div>
      </div>
      <div className="skills-container">
        <div style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          <Fade right>
            <h4>MY STACK</h4>
          </Fade>
          <Fade left>
            <h2>My technologies</h2>
          </Fade>
        </div>
        <div style={{ transform: `translateY(${offsetY * 0.35}px)` }}>
          <Fade bottom>
            <img src={skills} alt={skills} />
          </Fade>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-title">
          <Fade bottom>
            <img src={projectImage} alt={projectImage} />
            <h1>Selected projects</h1>
          </Fade>
          <div className="project-container">
            <img src={tooly} alt={tooly} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
