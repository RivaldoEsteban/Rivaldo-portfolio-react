import React from "react";
import styled from "styled-components";
import "../css/header.css";
const HeaderStyled = styled.header`
  background: #0f0e17;
  color: white;
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <div className="header-logo">
          <a href="#home">
            <img src="./images/leon.svg" alt="logo" width="50" height="50" />
          </a>
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
