import styled from "styled-components";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Simone1 from "../../media/Feedbacks/6.PNG";
import Simone2 from "../../media/Feedbacks/7.PNG";
import img1 from "../../media/Feedbacks/9.jpg";
import img2 from "../../media/Feedbacks/10.jpg";
import img3 from "../../media/Feedbacks/11.jpg";
import img4 from "../../media/Feedbacks/12.jpg";
import img5 from "../../media/Feedbacks/13.jpg";
import img6 from "../../media/Feedbacks/1.jpg";
import img7 from "../../media/Feedbacks/2.jpg";
import img8 from "../../media/Feedbacks/3.PNG";
import img9 from "../../media/Feedbacks/4.jpg";
import img10 from "../../media/Feedbacks/5.jpg";

const Style = styled.div``;

const Text = styled.div`
  text-align: justify;
  margin: 16px auto !important;
  @media screen and (min-width: 601px) and (max-width: 810px) {
    margin: 24px auto !important;
    font-size: 1.3em;
    margin: 16px 24px;
  }
  @media screen and (max-width: 600px) {
    margin: 24px auto !important;
    font-size: 1em;
    margin: 24px 32px;
  }
`;

const TestimContainer = styled.div`
  width: 95vw;
  display: block;
  margin: 8px auto 40px auto;
`;

const PhotoContainer = styled.div`
  width: 40%;

  display: inline-block;

  & > div {
    width: 100%;

    & > img {
      width: 100%;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const ContentContainer = styled.div`
  width: 60%;

  display: inline-block;

  & > div {
    margin: 0 auto;
    width: 80%;
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const CarouselStyle = styled.div`
  width: 55% !important;
  .thumb {
    border: 3px solid #cca352;
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    width: 70% !important;
  }
  @media screen and (max-width: 600px) {
    width: 80% !important;
  }
`;

const Testimonials = () => {
  return (
    <Style id="testimonials">
      <NavBar />
      <TestimContainer>
        <PhotoContainer>
          <div id="pic1">
            <img src={Simone1} alt="Foto Simone" />
          </div>
          <div id="pic2">
            <img src={Simone2} alt="Foto Simone" />
          </div>
        </PhotoContainer>
        <ContentContainer>
          <Text className="textBox">
            <p>
              Cada feedback que recebemos é inspirador e muito importante, pois
              com a sua avaliação podemos medir nosso nível de qualidade, e
              melhor, com isso você nos motiva a melhorar em todos os aspectos.
            </p>
            <p>
              É com muita alegria que compartilhamos aqui, algumas de nossas
              avaliações e feedbacks, esperamos em breve ver a sua por aqui
              também!
              <br />
              <br />
              Compartilhe sua experiência conosco{" "}
              <a
                href="https://g.page/studiosimoneserafim-google/review?gm"
                target="_blank"
                rel="noreferrer"
              >
                <u>clicando aqui</u>
              </a>
              .
            </p>
          </Text>
          <CarouselStyle>
            <Carousel
              className="photoBox"
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              showThumbs={true}
              swipeable={true}
            >
              <img src={img1} alt="Depoimento 1" />
              <img src={img2} alt="Depoimento 2" />
              <img src={img3} alt="Depoimento 3" />
              <img src={img4} alt="Depoimento 4" />
              <img src={img5} alt="Depoimento 5" />
              <img src={img6} alt="Depoimento 6" />
              <img src={img7} alt="Depoimento 7" />
              <img src={img8} alt="Depoimento 8" />
              <img src={img9} alt="Depoimento 9" />
              <img src={img10} alt="Depoimento 10" />
            </Carousel>
          </CarouselStyle>
        </ContentContainer>
      </TestimContainer>
      <Footer />
    </Style>
  );
};

export default Testimonials;
