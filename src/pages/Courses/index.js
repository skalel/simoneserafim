import styled from "styled-components";
import { shade } from "polished";

import Typewriter from "typewriter-effect";

import CourseImage from "../../media/ArteCurso.JPG";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Container = styled.div`
  width: 100%;
  background-color: transparent;

  & > h2 {
    text-align: center;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 601px) and (max-width: 810px) {
    h2 {
      margin-top: 24px;
    }
  }
`;

const Content = styled.div`
  margin-top: 16px;

  .imageBox {
    width: 30%;
    max-height: 40%;
    margin: 8px 16px;
    & > img {
      width: 100%;
    }
  }

  & div {
    display: inline-block;
  }

  & div > .textElements {
    max-width: 65%;

    & > div {
      margin: 24px 0;
    }

    & > h2 {
      margin: 24px 8px;
    }
    & > h3 {
      margin-bottom: 12px;
    }
    & > p {
      margin: 8px;
      text-align: justify;

      & > strong {
        font-weight: 500;
      }
    }
    .redirLink {
      width: 60%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      margin: 24px auto;
      height: 50px;
      background: linear-gradient(
        180deg,
        rgba(140, 108, 23, 1) 0%,
        rgba(37, 31, 22, 1) 45%
      );
      border: 2px solid #cca352;
      border-radius: 12px;
      transition: all 0.2s ease-in-out;
      &:hover {
        border: 2px solid ${shade(0.2, "#cca352")};
        color: #cca352;
      }
    }
  }
  .why-to-choose-us {
    width: 100%;
    & > h2 {
      text-align: center;
      margin: 24px 0;
    }
    & > p {
      margin: 16px;
      text-align:center;
    }
    .redirLink {
      width: 35%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      margin: 24px auto;
      height: 50px;
      background: linear-gradient(
        180deg,
        rgba(140, 108, 23, 1) 0%,
        rgba(37, 31, 22, 1) 45%
      );
      border: 2px solid #cca352;
      border-radius: 12px;
      transition: all 0.2s ease-in-out;
      &:hover {
        border: 2px solid ${shade(0.2, "#cca352")};
        color: #cca352;
      }
      @media screen and (max-width: 810px) {
        width: 90% !important;
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: block;

    & div {
      display: block;
      margin: 0 auto;
    }

    .imageBox {
      display: block;
      width: 350px;
      height: 350px;
      margin: 8px auto;
      & > img {
        width: 100%;
      }
    }

    & div > .textElements {
      max-width: 100%;
      margin: 8px 16px;
      width: 90%;
      & > p {
        text-align: left;
      }
    }
    .redirLink {
      width: 90%;
      background-color: #1f1a12cc;
      border: 2px solid #f8e9d2;
      border-radius: 24px;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 810px) {
    display: block;

    & div {
      display: block;
    }

    .imageBox {
      width: 100%;
      & > img {
        margin: 0 auto;
        display: block;
        width: 50%;
      }
    }

    & div > .textElements {
      margin: 8px 8px;
      max-width: 100%;
    }

    .redirLink {
      background-color: #1f1a12cc;
      border: 2px solid #f8e9d2;
      border-radius: 24px;
    }
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
    margin: 16px auto;

    & > iframe {
      width: 90%;
      height: 32vh;
      margin: 16px 0;
    }
  }
`;

const Animated = styled.div`
  background: #c20000;
  width: max-content;
  height: 40px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
  & > h2 {
    margin: 8px;
    color: #251f16 !important;
  }
`;

export const Courses = () => {
  return (
    <div id="classes">
      <NavBar />
      <Container>
        <Content>
          <div>
            <div className="imageBox">
              <img src={CourseImage} alt="Microblanding Realista" />
            </div>
            <div className="textElements">
              <h2>Microblanding Realista</h2>
              <h3>
                <i>O guia definitivo de tudo que voc?? precisa saber!</i>
              </h3>
              <p>
                A t??cnica mais linda e queridinha dentro do mundo da est??tica!
              </p>
              <p>
                Fios reproduzidos atrav??s de um indutor chamado Tebori, obt??m-se
                um aspecto mega natural, fios precisos e extremamente finos que
                proporcionam resultados surpreendentes.
              </p>
              <p>
                {" "}
                O curso ?? composto por tr??s (3) dias integrais, com um
                cronograma pr??tico e completo elaborado para n??o ficar nenhuma
                d??vida. Possui parte te??rica, pratica em peles sint??ticas,
                desenvolvimento detalhado para produ????o de trama em fios
                realistas com efeito de luz e sombra, e por fim cada aluna
                executa uma Microblanding em modelo real, supervisionada por
                mim.
              </p>
              <p>
                {" "}
                O material para a execu????o do procedimento durante o curso ser??
                fornecido na cl??nica, e pra ficar ainda melhor, nesta edi????o do
                curso voc?? leva pro seu espa??o todo o material necess??rio para
                que voc?? atenda 10 clientes, ou seja, o curso se paga em
                exatamente menos de 2 meses caso queira trabalhar por 10 horas
                por m??s! S??rio?? Simm, significa trabalhar{" "}
                <strong>1 hora por dia em um m??s</strong>. E caso seja dedicada
                e queira crescer ainda mais, pode escolher atender por mais umas
                horinhas por dia e ainda ter renda e tempo de qualidade o
                suficiente para ter uma vida tranquila com sua fam??lia!
              </p>
              <p>
                {" "}
                Agora a cereja do bolo sabe qual ??? Que as alunas que reservarem
                suas vagas at?? dia 30/11/21 estar??o concorrendo a 1 dia
                exclusivo de est??gio presencial comigo aqui na cl??nica, isso
                mesmo, um dia de aprendizado na pratica real pra voc?? esclarecer
                e tirar todas as suas d??vidas e ainda pegar dicas para melhorar
                ainda mais seu atendimento!
              </p>
              <p>
                Reserve sua vaga logo, at?? mesmo porque nosso n??mero de alunas ??
                limitado!
              </p>
            </div>
          </div>
          <div className="why-to-choose-us">
            <h2>Por que escolher Simone Serafim?</h2>
            <p>
              Somos uma empresa que visa n??o somente a capacita????o de
              profissionais para a arte da micropigmenta????o, mas tamb??m o anseio
              em crescer e buscar sempre a sua melhor vers??o dentro do amplo
              potencial que cada um disp??e!
            </p>
            <h2>
              Seja voc?? o profissional de qualidade que o mercado est??
              precisando!
            </h2>
            <a
              className="redirLink"
              href="https://wa.me/5548991502600?text=Quero reservar minha vaga agora!"
              target="_blank"
              rel="noreferrer"
            >
              Quero reservar minha vaga!
            </a>
            <Animated>
              <h2>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Curso On-line em breve!")
                      .pauseFor(2500)
                      .start();
                  }}
                  options={{ loop: true }}
                />
              </h2>
            </Animated>
            <VidBox>
              <iframe
                src="https://www.youtube.com/embed/FLbrgWECsUU"
                title="Depoimento Andressa Carvalho"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/oWn21zh84io"
                title="Depoimento de Juliana Cardoso"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
            </VidBox>
          </div>
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default Courses;
