import topImage from "../Illustrator3.png";
import projectImage from "../Illustration4.png";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import skills from "../Component-skills.svg";
import toolyPrj from "../tooly.png";
import moverdPrj from "../moverd.png";
import ccrPrj from "../ccr.png";
import arrow from "../arrow.png";
import toolyLogo from "../tooly-logo.png";
import moverdLogo from "../moverd-logo.png";
import ccrLogo from "../ccr-logo.png";
import { Link, Element } from "react-scroll";
import ContactForm from "../components/contactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const [tooly, setTooly] = useState(false);
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
            <h2>my technologies</h2>
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
              <h1  className="punto-2">selected projects</h1>
              {/*    <img src={projectImage} alt={projectImage} /> */}
            </Fade>
          </div>
          <div className="project-list">
            <a
              onClick={toggleTooly}
              onMouseEnter={() => {
                setTooly(true);
                setMoverd(false);
                setCcr(false);
              }}
              className="project-link"
            >
              <img src={toolyLogo} alt={toolyLogo} />
            </a>
            <a
              onClick={toggleMoverd}
              onMouseEnter={() => {
                setTooly(false);
                setMoverd(true);
                setCcr(false);
              }}
              className="project-link"
            >
              <img src={moverdLogo} alt={moverdLogo} />
            </a>
            <a
              onClick={toggleCcr}
              onMouseEnter={() => {
                setTooly(false);
                setMoverd(false);
                setCcr(true);
              }}
              className="project-link"
            >
              <img src={ccrLogo} alt={ccrLogo} />
            </a>
          </div>
          {(tooly || moverd || ccr) && (
            <div className="arrow-container">
              <img
                className={moverd || ccr ? "arrow-hide" : ""}
                src={arrow}
                alt={arrow}
              />
              <img
                className={tooly || ccr ? "arrow-hide" : ""}
                src={arrow}
                alt={arrow}
              />
              <img
                className={moverd || tooly ? "arrow-hide" : ""}
                src={arrow}
                alt={arrow}
              />
            </div>
          )}
          {(tooly || moverd || ccr) && (
            <div className="project-container-father">
              {tooly && (
                <div className="project-container">
                  <img src={toolyPrj} alt={toolyPrj} />
                  <h3>
                    Tooly is a tool sharing platform. The idea is to rent the
                    tools we got at home creating community, sharing resources,
                    evading the consumerism and reusing items.
                  </h3>
                </div>
              )}
              {moverd && (
                <div className="project-container">
                  <img src={moverdPrj} alt={moverdPrj} />
                  <h3>
                    Tooly is a tool sharing platform. The idea is to rent the
                    tools we got at home creating community, sharing resources,
                    evading the consumerism and reusing items.
                  </h3>
                </div>
              )}
              <div>
                {ccr && (
                  <div className="project-container">
                    <img src={ccrPrj} alt={ccrPrj} />
                    <h3>
                      Tooly is a tool sharing platform. The idea is to rent the
                      tools we got at home creating community, sharing
                      resources, evading the consumerism and reusing items.
                    </h3>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Element>
      <Element>
        <div className="contact">
          <ContactForm />
        </div>
      </Element>
      <footer>
        <a href="https://www.linkedin.com/in/jordi-davesa-casanova/"><FontAwesomeIcon icon={faLinkedin} className="social-link"/></a>
        <a href="https://github.com/jdavesa"><FontAwesomeIcon icon={faGithub} className="social-link"/></a>
        <p className="rights">©2021 Made by Jordi Davesa</p>
      </footer>
    </div>
  );
}

export default HomePage;
