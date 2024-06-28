import React from "react";
import styled from "styled-components";
import Networds from "./networks";
import "../css/hero.css";
const HeroStyled = styled.section`
  width: 100%;
  display: flex;
  background: #0f0e17;
  position: relative;
`;

function Hero() {
  return (
    <HeroStyled aria-label="hero" id="sobreMi">
      <section className="hero-container">
        <div className="hero-background"></div>
        <div className="wrapper">
          <div className="hero">
            <div className="hero-txt">
              <div className="hero-clip-path">
                <div className="hero-content">
                  <p className="hero-p">
                    De usuario de internet a un apacionado por el desarrollo
                    Frontend.
                  </p>
                  <div>
                    <h1>Soy Rivaldo Esteban</h1>
                    <strong>Frontend Developer </strong>
                  </div>
                  <p className="me-description">
                    Me gusta centrarme en los detalles de las experiencias de
                    nuevos productos con una implementación en código ideal.
                    Pero los grandes productos no comienzan ahí, comienzan con
                    una sólida colaboración con los compañeros de equipo de
                    investigación, ingeniería y productos para comprender los
                    problemas y las circunstancias de los clientes.
                  </p>
                  <Networds />
                  <a
                    href="images/rivaldo-esteban-cv.pdf"
                    download="rivaldo-esteban-curriculum"
                    className="curriculum"
                  >
                    <button>Descargar Curriculum</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-clip-path-button"></div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
