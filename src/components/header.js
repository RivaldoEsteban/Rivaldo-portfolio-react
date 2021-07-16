import React from "react";
import styled from "styled-components";
import "../css/header.css";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  background: #0f0e17;
  color: white;
  position: sticky;
  top: 0px;
  z-index: 100;
  @media (max-width: 678px) {
    .header-nav ul {
      gap: 0;
      justify-content: space-around;
      height: 40px;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <div className="header-logo">
          <Link to="/Rivaldo-portfolio-react/">
            <img src="./images/leon.svg" alt="logo" width="50" height="50" />
          </Link>
        </div>
      </div>
      <nav className="header-nav">
        <div className="wrapper">
          <ul>
            <li>
              <a href="#sobreMi">sobre mi </a>
            </li>
            <li>
              <a href="#projects">proyectos</a>
            </li>
            <li>
              <a href="#contact">contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
