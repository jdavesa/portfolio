import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

interface INv {
  shadow: string;
}

const NavbarContainer = styled.div<INv>`
  position: fixed;
  padding-top: 20px;
  z-index: 2;
  width: 100vw;
  height: 50px;
  background-color: rgba(255, 255, 255);
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
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.08);;
    }
`;

const toNoShadow = keyframes`
    from{
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.08);; 
    }
    to{
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.041);;
    }
`;

function Navbar() {
  const [shadow, setShadow] = useState<string>("default");
  const [notFirstTime, setNotFirstTime] = useState<boolean>(false);

  const toShadow = () => {
    if (window.scrollY >= 100) {
      setShadow("shadow");
      setNotFirstTime(true);
    } else if (notFirstTime && window.scrollY <= 100) {
      setShadow("noShadow");
    }
  };

  window.addEventListener("scroll", toShadow);

  return (
    <NavbarContainer shadow={shadow}>
      <div className="navbar">
        <Link
            className="navbar-link"
            to="home-page"
            spy={true}
            smooth={true}
            duration={500}
          >
        <h3>Jordi Davesa</h3>
        </Link>
        <div>
          <Link
            className="navbar-link"
            to="punto-2"
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
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
