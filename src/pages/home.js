import topImage from "../Illustration.png";
import projectImage from "../Illustration4.png";
import { useState, useEffect } from "react";
import styled from "styled-components";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Stikcy = styled.div``;

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const [tooly, setTooly] = useState(false);
  const [moverd, setMoverd] = useState(false);
  const [ccr, setCcr] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventLinstener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.addEventListener("resize", handleSize);
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
      <hr className="line-between-sections" />
      {windowWidth > 800 && (
        <Element name="projects" className="projects-container-scroll">
          <div className="projects-list-sticky">
            <div>
              <div>
                <h1>Tooly</h1>
                <p>React | Node.js | MongoDB</p>
                <p>Tooly is a tool sharing platform.
The idea is to rent the tools we got at home creating community, sharing resources, evading the consumerism and reusing items.</p>
              </div>
              <div>
                <h1>Moverd</h1>
                <p>JavaScript | Node.js | MongoDB</p>
                <p>Tooly is dfasdf kdfjaldsjf fjsdjhfklafja hfaksdhfjkdajfa dfjlsdjfldsajfla jfldsajfashgfkdahfa ljfaldsjflas dfasdl fjadsljfsldjfldsjf jfadslfjsdljfldsjfladsjfa  ldsfjdlsjfaljfldsf jlsdjflsdjfksdjflaj jflasdjfladsjkflaksfjal.</p>
              </div>
              <div>
                <h1>CCR</h1>
                <p>JavaScript | Canvas</p>
                <p>Tooly is dfasdf kdfjaldsjf fjsdjhfklafja hfaksdhfjkdajfa dfjlsdjfldsajfla jfldsajfashgfkdahfa ljfaldsjflas dfasdl fjadsljfsldjfldsjf jfadslfjsdljfldsjfladsjfa  ldsfjdlsjfaljfldsf jlsdjflsdjfksdjflaj jflasdjfladsjkflaksfjal.</p>
              </div>
            </div>
          </div>
          <div className="project-images">
              <div>
                <img src={toolyPrj} alt={toolyPrj} />
              </div>
              <div>
                <img src={moverdPrj} alt={moverdPrj} />
              </div>
              <div>
                <img src={ccrPrj} alt={ccrPrj} />
              </div>
            </div>
        </Element>
      )}
      <Element>
        <div className="contact">
          <ContactForm />
        </div>
      </Element>
      <footer>
        <a href="https://www.linkedin.com/in/jordi-davesa-casanova/">
          <FontAwesomeIcon icon={faLinkedin} className="social-link" />
        </a>
        <a href="https://github.com/jdavesa">
          <FontAwesomeIcon icon={faGithub} className="social-link" />
        </a>
        <p className="rights">©2021 Made by Jordi Davesa</p>
      </footer>
    </div>
  );
}

export default HomePage;
