import topImage from "../Illustrator3.png";
import projectImage from "../Illustration4.png";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import skills from "../Component-skills.svg";
import toolyPrj from "../tooly.png";
import moverdPrj from "../moverd.png";
import ccrPrj from "../ccr.png";
import toolyLogo from "../tooly-logo.png";
import moverdLogo from "../moverd-logo.png";
import ccrLogo from "../ccr-logo.png";
import { Link, Element } from "react-scroll";

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const [tooly, setTooly] = useState(true);
  const [moverd, setMoverd] = useState(false);
  const [ccr, setCcr] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventLinstener("scroll", handleScroll);
  }, []);

  const toggleTooly = () => {
    setTooly(true);
    setMoverd(false);
    setCcr(false);
  };

  const toggleMoverd = () => {
    setTooly(false);
    setMoverd(true);
    setCcr(false);
  };
  const toggleCcr = () => {
    setTooly(false);
    setMoverd(false);
    setCcr(true);
  };

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
      <Element name="projects">
        <div className="projects-container">
          <div className="projects-title">
            <Fade bottom>
              <h3>SOME</h3>
              <h1>Selected projects</h1>
              {/*    <img src={projectImage} alt={projectImage} /> */}
            </Fade>
          </div>
          <div className="project-list">
            <a onClick={toggleTooly} className="project-link">
              <img src={toolyLogo} alt={toolyLogo} />
            </a>
            <a onClick={toggleMoverd} className="project-link">
              <img src={moverdLogo} alt={moverdLogo} />
            </a>
            <a onClick={toggleCcr} className="project-link">
              <img src={ccrLogo} alt={ccrLogo} />
            </a>
          </div>
          <div style={{ transform: `translateY(${offsetY * 0.05}px)` }}>
          {tooly && (
            <Fade bottom>
              <div className="project-container">
                <img src={toolyPrj} alt={toolyPrj} />
                <h3>
                  Tooly is a tool sharing platform. The idea is to rent the
                  tools we got at home creating community, sharing resources,
                  evading the consumerism and reusing items.
                </h3>
              </div>
            </Fade>
          )}
          {moverd && (
            <Fade bottom>
              <div className="project-container">
                <img src={moverdPrj} alt={moverdPrj} />
                <h3>
                  Tooly is a tool sharing platform. The idea is to rent the
                  tools we got at home creating community, sharing resources,
                  evading the consumerism and reusing items.
                </h3>
              </div>
            </Fade>
          )}
          <div>
            {ccr && (
              <Fade>
                <div className="project-container">
                  <img src={ccrPrj} alt={ccrPrj} />
                  <h3>
                    Tooly is a tool sharing platform. The idea is to rent the
                    tools we got at home creating community, sharing resources,
                    evading the consumerism and reusing items.
                  </h3>
                </div>
              </Fade>
            )}
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default HomePage;
