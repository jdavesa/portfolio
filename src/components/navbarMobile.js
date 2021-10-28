import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.div`
  position: fixed;
  padding-top: 0px;
  z-index: 2;
  width: 100vw;
  height: 50px;
  background-color: rgb(233, 235, 227);
  animation: ${(props) =>
      props.shadow === "default"
        ? null
        : props.shadow === "shadow"
        ? toShadow
        : toNoShadow}
    0.3s forwards;
`;
const toShadow = keyframes`
    from{
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.041);
    }
    to{
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.041);
        border-bottom: 1px solid rgb(36, 36, 36);
        background-color: rgb(246, 247, 242);
    }
`;

const toNoShadow = keyframes`
    from{
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.041);
        background-color: rgb(246, 247, 242);
    }
    to{
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.041);
    }
`;


function NavbarMobile() {
  const [shadow, setShadow] = useState("default");
  const [notFirstTime, setNotFirstTime] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toShadow = () => {
    if (window.scrollY >= 100) {
      setShadow("shadow");
      setNotFirstTime(true);
    } else if (notFirstTime && window.scrollY <= 100) {
      setShadow("noShadow");
    }
  };

  window.addEventListener("scroll", toShadow);

  const toggleMenu = (e) => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <NavbarContainer shadow={shadow}>
        <div className="navbar">
          <Link
            className="navbar-link-name"
            to="home-page"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h3>Jordi Davesa</h3>
          </Link>
          <button onClick={toggleMenu} className="ham-button">
            {showMenu ? <FontAwesomeIcon icon={faTimes} className="ham-link" /> : <FontAwesomeIcon icon={faBars} className="ham-link" />}
          </button>
        </div>
      </NavbarContainer>
      
        <Slide right when={showMenu}>
          <div className="ham-menu">
            <Link
              className="navbar-ham-link"
              onClick={toggleMenu}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              /projects
            </Link>
            <Link
              className="navbar-ham-link"
              onClick={toggleMenu}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              /contact
            </Link>
          </div>
        </Slide>
      {/* {!showMenu && (
        <Slide left opposite when={!showMenu}>
          <div className="ham-menu">
            <Link
              className="navbar-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="navbar-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </Slide>
      )} */}
    </div>
  );
}

export default NavbarMobile;
