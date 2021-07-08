import React from "react";
import styled from "styled-components";
import Networds from "./networks";
const HeroStyled = styled.section`
  height: 700px;
  width: 100vw;
  display: flex;
  background: #0f0e17;
  position: relative;
  .hero-image {
    height: inherit;
  }
  .hero-image img {
    width: calc(50% + 100px);
    position: absolute;
    right: 0;
    object-fit: cover;
    height: inherit;
    z-index: 1;
  }
  .hero-right {
    height: inherit;
    display: flex;
    width: 50%;
    flex-direction: column;
  }
  .clip-path {
    clip-path: polygon(0% 0%, calc(100% - 100px) 0%, 100% 100%, 0 100%);
    background: #0f0e17;
    height: inherit;
    width: 50%;
    z-index: 3;
    position: relative;
  }
  .hero-content {
    margin: 20px 120px 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: inherit;
    color: white;
  }
  .hero-p {
    margin: 0;
    color: #f25f4c;
    font-size: 15px;
  }
  h1 {
    font: 700 normal 55px/60px var(--fontTitle);
    margin: 0;
    margin: 1rem 0 0 0;
  }
  p {
    margin: 0 0 1rem 0;
    color: #a7a9be;
    font-size: 18px;
  }
  strong {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  .curriculum {
    background: #f25f4c;
    border: none;
    padding: 12px 0;
    width: 100%;
    margin: 1rem auto 2rem;
    color: white;
    font: 700 normal 1rem/18px var(--fontTitle);
  }
  @media (max-width: 850px) {
    h1 {
      font-size: 48px;
    }
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
          <p>
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
