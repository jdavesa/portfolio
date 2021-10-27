import topImage from "../Illustration.png";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import skills from "../Component-skills.svg";
import toolyPrj from "../tooly.png";
import moverdPrj from "../moverd.png";
import ccrPrj from "../ccr.png";
import { Element } from "react-scroll";
import ContactForm from "../components/contactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import cv from '../jordi-davesa-cv.pdf'

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
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

  return (
    <div className="home-page">
      <div className="top-container">
        <div style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          <Fade bottom>
            <div className="title">
              <p>ABOUT ME</p>
              <h1>I am a Front-end developer with a background in <br/>design.</h1>
              <form method="get" action={cv}>
                <button type="submit">Download CV</button>
              </form>
            </div>
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
              <div
                style={
                  offsetY < 2400
                    ? {
                        color: "rgb(36,36,36)",
                        borderLeft: "1px solid rgb(36,36,36)",
                        transition: "all 0.3s",
                        paddingLeft: "20px",
                      }
                    : { color: "rgb(180,180,180)", transition: "all 0.3s" }
                }
              >
                <h1>Tooly</h1>
                <p>React | Node.js | MongoDB</p>
                <p>
                  Tooly is a tool sharing platform. The idea is to rent the
                  tools we got at home creating community, sharing resources,
                  evading the consumerism and reusing items.
                </p>
              </div>
              <div
                style={
                  offsetY > 2400 && offsetY < 2900
                    ? {
                        color: "rgb(36,36,36)",
                        borderLeft: "1px solid rgb(36,36,36)",
                        transition: "all 0.3s",
                        paddingLeft: "20px",
                      }
                    : { color: "rgb(180,180,180)", transition: "all 0.3s" }
                }
              >
                <h1>Moverd</h1>
                <p>JavaScript | Node.js | MongoDB</p>
                <p>
                  Moved is a real-time air quality visual map of Barcelona. It
                  is designed to check the air quality of you area before
                  realizing any kind of open-air sport activity
                </p>
              </div>
              <div
                style={
                  offsetY > 2900
                    ? {
                        color: "rgb(36,36,36)",
                        borderLeft: "1px solid rgb(36,36,36)",
                        paddingLeft: "20px",
                        transition: "all 0.3s",
                      }
                    : { color: "rgb(180,180,180)", transition: "all 0.3s" }
                }
              >
                <h1>CCR</h1>
                <p>JavaScript | Canvas</p>
                <p>
                  Colorado cows revenge is a Shoot 'em up game inspired by the
                  stories of the cows being abducted by ufos in the '70s. In
                  this fiction, cows have found a way to go against the ufos.
                </p>
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
      <hr className="line-between-sections" />
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
