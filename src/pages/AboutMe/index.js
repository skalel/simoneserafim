import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import HorizAboutMe1 from "../../media/aboutMe/1q.jpg";
import HorizAboutMe2 from "../../media/aboutMe/2q.jpg";

import Mosaic from "../../media/aboutMe/mosaico.jpg";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Style = styled.div`
  * {
    box-sizing: border-box;
  }
  #aboutMe {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin-top: 8px;

    & h2 {
      text-align: center;
    }
  }
  .pageDivisor {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & + .pageDivisor {
      margin-top: 8px;
    }
  }
  #mapWrapper {
    margin: 0 auto;
    width: 96%;
    height: 80vh;
    position: relative;

    display: block;

    * {
      background-color: transparent;
      color: black;
    }
  }
  #companyArea {
    display: inline-flex;
    justify-content: space-evenly;
  }
  h2 {
    text-align: center;
    margin: 24px 8px;
  }
  #VertSobreMim {
    display: none;
  }
  .pageDivisor.mosaicProps {
    & .imageContainer {
      width: 60%;
      & img {
        width: 100%;
        padding-right: 8px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    #aboutMe {
      display: block;
      margin-top: -220px;
      padding-top: 220px;
    }
    .pageDivisor {
      flex-direction: column-reverse;
    }
    #HorizSobreMim {
      width: 100%;
    }
    .pageDivisor.mosaicProps {
      max-width: 100%;
      & .imageContainer {
        width: 100%;

        margin: auto auto;
        & img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    #HorizSobreMim {
      width: 100%;
    }
    .pageDivisor {
      flex-direction: column-reverse;
    }
    .mosaicProps {
      margin-right: 0px;
    }
    .pageDivisor.mosaicProps {
      width: 100%;
      flex-direction: column;
      & .imageContainer {
        width: 95%;
        margin: 16px 24px;
      }
      & .imageContainer > img {
        width: 100%;
      }
    }
  }
`;

const CarouselSobreMim = styled.div`
  width: 40%;

  margin-bottom: 8px;

  position: relative;

  .carousel-root {
    margin: 8px 16px;
  }
  .carousel .slide img {
    background-color: #f8e9d2;
  }
  .carousel.carousel-slider .control-arrow {
    background: #000 !important;
    height: 50px !important;
    position: absolute;
    top: 50%;
  }
`;

const MeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin: 0 16px;
  p + p {
    margin: 8px 0;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    display: inline-block;
    max-width: 100%;
  }
`;

const UpperMeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  margin: 0 16px;
  p + p {
    margin: 8px 0;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    display: block;
    max-width: 100%;
  }
`;

const AboutMe = () => (
  <Style id="aboutMe">
    <NavBar />
    <div>
      <div className="pageDivisor">
        <UpperMeText>
          <p>
            Oie, eu sou Simone Serafim, e ?? um prazer estar aqui me apresentando
            pra voc??!
          </p>
          <p>
            Sou esteticista e especialista em micropigmenta????o realista, com
            muita responsabilidade e amor pelo que fa??o, tenho a honra de estar
            com a empresa s??lida no mercado a mais de 11 anos.
          </p>
          <p>
            Tenho especialidades em micropigmenta????o param??dica reconstrutora de
            aur??ola mam??ria, micropigmenta????o capilar, revitaliza????o labial e
            tamb??m remo????o de tatuagem. Com 27 especializa????es, sendo 8 delas
            internacionais, entre estas a incr??vel t??cnica de micropigmenta????o
            capilar com o especialista de Israel Adir Schendel, realismo em
            param??dica aureolar com Alla Romazanova de Bielorr??ssia e
            microblanding realista com a refer??ncia Nhung Phan diretamente do
            Vietnam.
          </p>
          <p>
            Com a experi??ncia de tantos casos que j?? realizei e conhecendo a
            necessidade de minhas clientes, desenvolvi uma t??cnica maravilhosa
            que proporciona um misto de resultados, o que eleva a satisfa????o de
            nossas clientes al??m das expectativas.
          </p>
        </UpperMeText>
        <CarouselSobreMim id="HorizSobreMim">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            autoPlay={true}
            interval={6000}
          >
            <img src={HorizAboutMe1} alt="" />
            <img src={HorizAboutMe2} alt="" />
          </Carousel>
        </CarouselSobreMim>
      </div>
      <div className="pageDivisor mosaicProps">
        <div className="imageContainer">
          <img src={Mosaic} alt="Mosaico" />
        </div>
        <MeText>
          <p>
            O m??todo Simone Serafim, consiste na jun????o de algumas t??cnicas que
            proporcionam um resultado inovador e ??nico, no que se diz respeito
            ao realismo e naturalidade na micropigmenta????o de sobrancelhas.
          </p>
          <p>
            Desde meus 5 anos de idade sou apaixonada pela arte e lidar com
            pessoas, hoje me sinto realizada pessoal e profissionalmente, pois
            ter o poder de proporcionar felicidade a tantas pessoas me faz feliz
            e motiva a ser cada dia melhor.
          </p>
          <h2>
            Venha fazer parte do nosso time de clientes modernas,
            <br /> lindas e pr??ticas, voc?? vai amar!
          </h2>
        </MeText>
      </div>
    </div>
    <Footer />
  </Style>
);

export default AboutMe;
