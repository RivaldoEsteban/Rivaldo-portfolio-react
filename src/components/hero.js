import React from "react";
import styled from "styled-components";
import Networds from "./networks";
import "../css/hero.css";
const HeroStyled = styled.section`
  height: 700px;
  width: 100vw;
  display: flex;
  background: #0f0e17;
  position: relative;
  @media (max-width: 800px) {
    display: block;
    padding: 50px 30px;
    box-sizing: border-box;
    height: initial;
  }
`;

function Hero() {
  return (
    <HeroStyled aria-label="hero">
      <div className="hero-image">
        <img src="images/hero-desktop.jpg" alt="rivaldo" width="100" />
      </div>
      <div className="clip-path">
        <div className="hero-content">
          <p className="hero-p">
            De usuario de internet a un apacionado por el desarrollo Frontend.
          </p>
          <h1>Soy Rivaldo Esteban</h1>
          <strong>Frontend Developer </strong>
          <p className="me-description">
            Me encanta centrarme en los detalles de las experiencias de nuevos
            productos con una implementación en código perfecta. Pero los
            grandes productos no comienzan ahí, comienzan con una sólida
            colaboración con los compañeros de equipo de investigación,
            ingeniería y productos para comprender los problemas y las
            circunstancias de los clientes.
          </p>
          <a href="images/leon.svg" download="rivaldo-esteban-curriculum">
            <button className="curriculum">Descargar Curriculum</button>
          </a>
          <div>
            <Networds />
          </div>
        </div>
      </div>
    </HeroStyled>
  );
}

export default Hero;
