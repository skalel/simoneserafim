import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

import { AiOutlineWarning } from "react-icons/ai";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import data from "./data.json";

const Style = styled.div`
  /*Procedures Start*/
  #proceduresProps {
    padding: 32px 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  #proceduresProps h1 {
    text-align: center;
    margin-bottom: 24px;
  }
  #proceduresProps img {
    background-color: transparent;
  }
  /*Procedures End*/
`;

const CarouselStyle = styled.div`
  display: block;
  height: 60vh;

  width: 30%;

  .invisibleOverlay {
    opacity: 0;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  .buttonOverlay {
    margin: 8px 16px;
    width: 338.3px;
    height: 338.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #251f16cc;
    visibility: visible;
    opacity: 1;
    transition: 0.3s ease-in-out;
    z-index: 2;

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f8e9d2;
      margin: 0 16px;
      border-radius: 18px;

      svg {
        margin: 4px;
      }
      p {
        color: #251f16;
        text-align: center;
        margin: 2px 8px;
        padding: 4px 12px;
      }
      .button {
        color: #f8e9d2;
        background-color: #251f16cc;
        padding: 12px;
        margin: 4px 4px 8px 4px;
        border: 2px solid #251f16;
        border-radius: 15px;
        box-shadow: 1px 1px 1px #251f16;
        cursor: pointer;
      }
    }
  }

  .carousel-root {
    margin: 8px 16px;
  }
  .carousel .slide img {
    background-color: #f8e9d2;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    background: #f8e9d2;
    outline: 0;
  }

  .carousel.carousel-slider .control-arrow {
    background: #000 !important;
    height: 50px !important;
    position: absolute;
    top: calc(50% - 25px);
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 100%;
    margin: 8px auto;
    .buttonOverlay {
      width: 304px;
      height: 304px;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    width: 60%;
    height: 100%;
    margin: 8px auto;
  }
`;

const Wrapper = styled.div`
  display: block;
  height: 100%;

  .invisible {
    .slider-wrapper {
      filter: blur(6px) grayscale(1);
    }
  }

  .visible {
    .slider-wrapper {
      filter: unset;
    }
  }

  & > div {
    display: flex;
  }
  .reversed {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    .reversed {
      flex-direction: column;
    }
    & > div {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    flex-direction: column;
    .reversed {
      flex-direction: column;
    }
    & > div {
      flex-direction: column;
    }
  }
`;

const ProcedureText = styled.div`
  display: block;
  max-width: 70%;
  height: 100%;
  padding: 24px;
  margin: auto 16px;

  .titleProc {
    font-size: 32px;
    font-weight: 200;
    margin: 16px 0 24px 0;
  }
  .descProc {
    font-size: 22px;
    margin: 16px 0;
    font-weight: lighter;
  }
  .detProc {
    font-size: 16px;
    margin: 8px 0;
    font-weight: lighter;
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
    .titleProc {
      font-size: 28px;
    }
    .descProc {
      font-size: 20px;
      text-align: justify;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    max-width: 100%;
    .titleProc {
      font-size: 28px;
    }
    .descProc {
      font-size: 20px;
      text-align: justify;
    }
  }
`;

const Divisor = styled.div`
  & > hr {
    margin: 0 auto 16px auto;
    opacity: 0.6;
    width: 80%;
    border: 1px solid #f8e9d2;
  }
`;

const VidBox = styled.div`
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;

  & > iframe {
    width: 48%;
    height: 50vh;
  }

  @media screen and (max-width: 810px) {
    flex-direction: column;
    margin: 24px auto;

    & > iframe {
      width: 90%;
      height: 32vh;
      margin: 24px 0;
    }
  }
`;

export const Procedures = () => {
  const [visible, setVisible] = useState(false);

  function ShowImages() {
    setVisible(!visible); // Set "visible" to true
  }

  return (
    <div id="procedures">
      <NavBar />
      <Style>
        <div id="proceduresProps">
          <h1>Procedimentos</h1>
          {data.procedures.map((data) => (
            <Wrapper key={data.id}>
              {data.id % 2 === 0 ? ( //Par
                <div
                  className={
                    data.sensible_content === true ? "sensibleContent" : ""
                  }
                >
                  <CarouselStyle>
                    {!data.image_3 ? ( // 2 images
                      <>
                        {data.sensible_content === true ? (
                          <div
                            className={
                              !visible ? "buttonOverlay" : "invisibleOverlay"
                            }
                          >
                            <div className="buttons">
                              <AiOutlineWarning fill="#251f16" size={40} />
                              <p>
                                O conteúdo a seguir pode ser considerado
                                sensível.
                                <br />
                                Clique abaixo se desejar exibir.
                              </p>
                              <div class="button" onClick={ShowImages}>
                                Clique aqui
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <Carousel
                          showArrows={true}
                          showStatus={false}
                          showIndicators={false}
                          infiniteLoop={true}
                          showThumbs={false}
                          swipeable={true}
                          autoPlay={true}
                          interval={3000}
                          className={
                            data.sensible_content
                              ? visible
                                ? "visible"
                                : "invisible"
                              : ""
                          }
                        >
                          <img src={data.image} alt="Imagem 1" />
                          <img src={data.image_2} alt="Imagem 2" />
                        </Carousel>
                      </>
                    ) : (
                      // 3 images
                      <>
                        {data.sensible_content === true ? (
                          <div
                            className={
                              !visible ? "buttonOverlay" : "invisibleOverlay"
                            }
                          >
                            <div className="buttons">
                              <AiOutlineWarning fill="#251f16" size={40} />
                              <p>
                                O conteúdo a seguir pode ser considerado
                                sensível.
                                <br />
                                Clique abaixo se desejar exibir.
                              </p>
                              <div class="button" onClick={ShowImages}>
                                Clique aqui
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <Carousel
                          showArrows={true}
                          showStatus={false}
                          showIndicators={false}
                          infiniteLoop={true}
                          showThumbs={false}
                          swipeable={true}
                          autoPlay={true}
                          interval={3000}
                          className={
                            data.sensible_content
                              ? visible
                                ? "visible"
                                : "invisible"
                              : ""
                          }
                        >
                          <img src={data.image} alt="Imagem 1" />
                          <img src={data.image_2} alt="Imagem 2" />
                          <img src={data.image_3} alt="Imagem 3" />
                        </Carousel>
                      </>
                    )}
                  </CarouselStyle>
                  <ProcedureText>
                    <div>
                      <p className="titleProc">{data.name}</p>
                      <p className="descProc">{data.desc}</p>
                      <p className="detProc">
                        <i>{data.details}</i>
                      </p>
                    </div>
                  </ProcedureText>
                </div>
              ) : (
                //impar
                <div
                  className={
                    data.sensible_content === true
                      ? "sensibleContent reversed"
                      : "reversed"
                  }
                >
                  <CarouselStyle>
                    {!data.image_3 ? ( // 2 images
                      <>
                        {data.sensible_content === true ? (
                          <div
                            className={
                              !visible ? "buttonOverlay" : "invisibleOverlay"
                            }
                          >
                            <div className="buttons">
                              <AiOutlineWarning fill="#251f16" size={40} />
                              <p>
                                O conteúdo a seguir pode ser considerado
                                sensível.
                                <br />
                                Clique abaixo se desejar exibir.
                              </p>
                              <div class="button" onClick={ShowImages}>
                                Clique aqui
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <Carousel
                          showArrows={true}
                          showStatus={false}
                          showIndicators={false}
                          infiniteLoop={true}
                          showThumbs={false}
                          swipeable={true}
                          autoPlay={true}
                          interval={3000}
                          className={
                            data.sensible_content
                              ? visible
                                ? "visible"
                                : "invisible"
                              : ""
                          }
                        >
                          <img src={data.image} alt="Imagem 1" />
                          <img src={data.image_2} alt="Imagem 2" />
                        </Carousel>
                      </>
                    ) : (
                      // 3 images
                      <>
                        {data.sensible_content === true ? (
                          <div
                            className={
                              !visible ? "buttonOverlay" : "invisibleOverlay"
                            }
                          >
                            <div className="buttons">
                              <AiOutlineWarning fill="#251f16" size={40} />
                              <p>
                                O conteúdo a seguir pode ser considerado
                                sensível.
                                <br />
                                Clique abaixo se desejar exibir.
                              </p>
                              <div class="button" onClick={ShowImages}>
                                Clique aqui
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <Carousel
                          showArrows={true}
                          showStatus={false}
                          showIndicators={false}
                          infiniteLoop={true}
                          showThumbs={false}
                          swipeable={true}
                          autoPlay={true}
                          interval={3000}
                          className={
                            data.sensible_content
                              ? visible
                                ? "visible"
                                : "invisible"
                              : ""
                          }
                        >
                          <img src={data.image} alt="Imagem 1" />
                          <img src={data.image_2} alt="Imagem 2" />
                          <img src={data.image_3} alt="Imagem 3" />
                        </Carousel>
                      </>
                    )}
                  </CarouselStyle>
                  <ProcedureText>
                    <div>
                      <p className="titleProc">{data.name}</p>
                      <p className="descProc">{data.desc}</p>
                      <p className="detProc">
                        <i>{data.details}</i>
                      </p>
                    </div>
                  </ProcedureText>
                </div>
              )}
              <Divisor>
                <hr />
              </Divisor>
            </Wrapper>
          ))}
        </div>
        <VidBox>
          <iframe
            src="https://www.youtube.com/embed/pF-_d2jg0rA"
            title="Uma experiência! Isso que buscamos em cada atendimento!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/UmxoDnO_G_I"
            title="Satisfação do Cliente"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VidBox>
      </Style>
      <Footer />
    </div>
  );
};

export default Procedures;
