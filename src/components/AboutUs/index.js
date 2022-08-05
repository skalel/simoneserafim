import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Estrutura Quadrada
import hImg1 from "../../media/HorizEstrutura/2.jpg";
import hImg3 from "../../media/HorizEstrutura/3.jpg";
import hImg4 from "../../media/HorizEstrutura/4.jpg";
import hImg5 from "../../media/HorizEstrutura/5.jpg";
import hImg6 from "../../media/HorizEstrutura/6.jpg";

const Style = styled.div`
  margin-top: -110px;
  padding-top: 110px;
  margin: 24px 32px;
  * {
    box-sizing: border-box;
  }
  #content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  #mapWrapper {
    margin: 16px auto 0 auto;
    width: 60%;
    position: relative;

    display: none;

    & > * {
      background-color: transparent;
      color: #f8e9d2;
    }

    @media screen and (max-width: 600px) {
      display: block;
      height: 225px;
    }
    @media screen and (min-width: 601px) and (max-width: 768px) {
      display: block;
      height: 460px;
    }
  }
  #companyArea {
    display: inline-flex;
    justify-content: space-evenly;
  }
  #responsiveCarousel {
    display: flex;
  }
  @media screen and (max-width: 600px) {
    #responsiveCarousel {
      display: flex;
      width: 100%;
    }
    #companyArea {
      display: flex;
      flex-direction: column-reverse;
    }
    .carousel.carousel-slider .control-arrow {
      top: 35% !important;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    #responsiveCarousel {
      display: flex;
      width: 100%;
    }
    #companyArea {
      display: flex;
      flex-direction: column-reverse;
    }
    .carousel.carousel-slider .control-arrow {
      top: 45% !important;
    }
  }
`;

const DivText = styled.div`
  background-color: transparent;
  max-width: 50%;

  font-size: 1rem;
  font-weight: lighter;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: justify;

  p + p {
    margin: 8px 0px;
  }

  @media screen and (max-width: 600px) {
    max-width: 96%;
    margin: 0 auto;
    font-size: 1.05rem;
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    max-width: 96%;
    margin: 0 auto;
    font-size: 1.05rem;
  }
`;

const CarouselStyle = styled.div`
  margin-bottom: 16px;

  width: 45%;

  justify-content: center;
  align-items: center;

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
    height: 70px !important;
    position: absolute;
    top: 50%;
  }
`;

const AboutUs = () => (
  <Style id="aboutUs">
    <div>
      <div id="companyArea">
        <DivText>
          <p>
            A Clínica Simone Serafim tem como missão, oferecer às nossas
            clientes o mais alto nível de qualidade em micropigmentação,
            buscando sempre um resultado realista e o mais discreto possível, e
            para nós, um bom resultado é um conjunto de fatores, incluindo sim
            uma estrutura aconchegante e atendimento personalizado.
          </p>
          <p>
            Por isso planejamos um ambiente agradável para que você se sinta à
            vontade e tenha aqui uma experiência única, cada detalhe foi
            desenhado e criado com muito carinho dedicado especialmente à você.
          </p>
          <p>
            A empresa lida diretamente com a autoestima. Ao longo da nossa
            caminhada, já impactamos a vida de mais de 3 mil e setecentas
            pessoas, dentre as quais, muitas histórias emocionantes que
            repercutiram pelo Brasil a fora.
          </p>
          <p>
            Além desses trabalhos lindos que realizamos aqui, também
            disponibilizamos a sensacional remoção a laser de micropigmentação e
            tatuagem. Com equipamento de alta tecnologia e técnica segura, agora
            é possível remover procedimentos indesejados ou mal sucedidos, sem
            machucar ou gerar cicatrizes, e em seguida devolver a auto estima
            com um resultado realista lindo, então, se olhar no espelho não é
            mais sinônimo de frustração e sim de alegria!
          </p>
          <p>
            Vamos conhecer um pouco dos nossos ambientes? Assim, quando chegar
            aqui, tudo será mais familiar para você!
          </p>
          <p>
            Sinta-se à vontade e navegue pelo nosso site, e por favor, não fique
            com dúvidas, nossa equipe ficará feliz em lhe oferecer um
            atendimento personalizado e esclarecer tudinho!
          </p>
        </DivText>
        <CarouselStyle id="responsiveCarousel">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            autoPlay={true}
            interval={3000}
          >
            <img src={hImg1} alt="" />
            <img src={hImg3} alt="" />
            <img src={hImg4} alt="" />
            <img src={hImg5} alt="" />
            <img src={hImg6} alt="" />
          </Carousel>
        </CarouselStyle>
      </div>
      <div id="mapWrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14026.487611965278!2d-49.009971!3d-28.4909312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a9fa6fd46f1db30!2sStudio%20Simone%20Serafim%20-%20Tubar%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1635943869507!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa - Simone Serafim"
        ></iframe>
      </div>
    </div>
  </Style>
);

export default AboutUs;
