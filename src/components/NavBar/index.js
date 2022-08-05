import React from "react";

import { HashLink, NavHashLink } from "react-router-hash-link";

import styled from "styled-components";
import { shade } from "polished";

import logo from "../../media/logo.png";

const Styles = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #251f16cc;
  max-height: 10%;

  backdrop-filter: saturate(1.8) blur(5px);

  top: 0;
  z-index: 100;

  #logo-header {
    margin: 16px 24px;
    background-color: transparent;
  }

  #logo-header a {
    height: 100%;
    background-color: transparent;
  }

  #logo-image {
    width: 120px;
    background-color: transparent;
  }

  #nav-buttons {
    display: inline-flex;
    width: 70%;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-right: 24px;
    background-color: transparent;
  }

  #nav-buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;

    &:hover {
      background-color: ${shade(0.2, "#251f16")};
    }
  }

  .deskSelected {
    background-color: #251f16cc !important;
    font-weight: 700;
  }

  .mobSelected .iconContainer {
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf49773 0%,
      #fdf49773 5%,
      #fd594973 45%,
      #d6249f73 60%,
      #285aeb73 90%
    );
  }

  .containerDropdown {
    width: 100%;
    height: 100%;

    cursor: pointer;

    background-color: transparent;

    &:hover {
      background-color: ${shade(0.2, "#251f16")};
      .dropMenu {
        display: block !important;
      }
    }

    .dropdown {
      background-color: transparent;

      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        background-color: transparent;
      }
    }
    .dropMenu {
      display: none;
      background-color: #251f16cc;
    }
  }
  #responsiveNavMenu {
    display: none;
    ::-webkit-scrollbar {
      width: 12px;
    }
  }
  @media only screen and (max-width: 600px) {
    #nav-buttons {
      display: none;
    }
    #logo-header {
      display: none;
    }
    #responsiveNavMenu {
      display: grid;
      grid-auto-flow: column dense;
      overflow: auto;
      background-color: transparent;

      .mobileLinks {
        height: 100px;
        width: 100px;

        margin: 16px 2px 8px 2px;

        display: block;

        background-color: transparent;

        & .iconContainer {
          display: flex;
          margin: 0 auto;
          width: 80px;
          height: 80px;
          border: 2px solid #cca352;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
        }

        & svg {
          background-color: transparent;
          width: 45px;
        }
        & span {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 14px;
          background-color: transparent;
        }
      }
    }
  }
  @media screen and (min-width: 601px) and (max-width: 810px) {
    #nav-buttons {
      display: none;
    }
    #logo-header {
      display: none;
    }
    #responsiveNavMenu {
      display: grid;
      grid-auto-flow: column dense;
      overflow: auto;
      background-color: transparent;

      .mobileLinks {
        height: 120px;
        width: 120px;

        margin: 16px 4px 12px 4px;

        display: block;

        background-color: transparent;

        & .iconContainer {
          display: flex;
          margin: 0 auto;
          width: 100px;
          height: 100px;
          border: 3px solid #cca352;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
        }

        & svg {
          background-color: transparent;
        }

        & img {
          background-color: transparent;
          filter: invert(99%) sepia(9%) saturate(2279%) hue-rotate(308deg)
            brightness(90%) contrast(118%);
        }

        & span {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 18px;
          background-color: transparent;
        }
      }
    }
  }
`;

export const NavBar = () => {
  return (
    <Styles>
      <div id="logo-header">
        <HashLink smooth to="/#top">
          <img src={logo} id="logo-image" alt="Simone Serafim" />
        </HashLink>
      </div>
      <div id="nav-buttons">
        <NavHashLink smooth to="/#top" activeClassName="deskSelected">
          Início
        </NavHashLink>
        <NavHashLink
          smooth
          to="/procedimentos/#procedures"
          activeClassName="deskSelected"
        >
          Procedimentos
        </NavHashLink>
        <NavHashLink smooth to="/#aboutUs" activeClassName="deskSelected">
          Sobre nós
        </NavHashLink>
        <NavHashLink
          smooth
          to="/sobre-mim/#aboutMe"
          activeClassName="deskSelected"
        >
          Sobre mim
        </NavHashLink>
        <NavHashLink
          smooth
          to="/depoimentos/#testimonials"
          activeClassName="deskSelected"
        >
          Depoimentos
        </NavHashLink>
        <NavHashLink smooth to="/#contact" activeClassName="deskSelected">
          Contato
        </NavHashLink>
      </div>
      <div id="responsiveNavMenu">
        <NavHashLink
          smooth
          activeClassName="mobSelected"
          className="mobileLinks"
          to="/#top"
        >
          <div className="iconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#cca352"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
            >
              <path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
            </svg>
          </div>
          <span>Início</span>
        </NavHashLink>
        <NavHashLink
          smooth
          activeClassName="mobSelected"
          className="mobileLinks"
          to="/procedimentos/#procedures"
        >
          <div className="iconContainer">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="64.000000pt"
              height="64.000000pt"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="#cca352"
                stroke="none"
              >
                <path
                  d="M270 545 c-10 -12 -10 -15 3 -15 9 0 18 -10 20 -22 l4 -23 2 23 c0
13 7 22 17 22 14 0 14 3 4 15 -7 8 -18 15 -25 15 -7 0 -18 -7 -25 -15z"
                />
                <path
                  d="M454 529 c-3 -6 0 -18 9 -26 18 -18 37 -9 37 18 0 21 -34 27 -46 8z
m31 -9 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z"
                />
                <path
                  d="M182 518 c-15 -15 -16 -32 -2 -23 6 3 10 -3 10 -14 0 -12 5 -21 10
-21 6 0 10 9 10 21 0 11 5 17 10 14 6 -3 10 -2 10 2 0 10 -21 33 -30 33 -3 0
-11 -5 -18 -12z"
                />
                <path
                  d="M240 466 c-20 -8 -63 -29 -95 -47 -75 -43 -53 -49 64 -19 l82 21 114
-31 c63 -16 119 -30 124 -30 6 0 11 15 11 34 0 38 -6 42 -130 71 -78 18 -123
18 -170 1z m218 -31 c48 -14 62 -22 62 -36 0 -11 -2 -19 -4 -19 -2 0 -53 13
-114 29 -106 28 -114 29 -164 15 -75 -20 -81 -16 -23 12 42 21 61 24 115 21
36 -2 93 -12 128 -22z"
                />
                <path
                  d="M205 351 c-33 -16 -73 -41 -90 -54 -25 -21 -28 -29 -19 -44 6 -10 20
-18 30 -18 11 -1 41 -14 67 -29 58 -35 117 -49 165 -40 63 11 152 62 152 87 0
5 -16 -3 -35 -17 -42 -32 -106 -56 -151 -56 -39 0 -74 12 -134 48 -25 14 -53
25 -64 23 -31 -5 -13 22 38 57 122 82 251 76 348 -16 15 -14 31 -22 35 -18 11
11 -42 53 -102 82 -74 35 -161 33 -240 -5z"
                />
                <path
                  d="M276 349 c-41 -10 -126 -58 -126 -71 0 -13 14 -9 40 12 33 26 40 25
40 -4 0 -14 12 -38 26 -55 49 -58 146 -31 160 44 7 41 10 42 41 13 13 -12 26
-19 29 -15 12 12 -51 57 -100 72 -55 17 -55 17 -110 4z m-12 -48 c-10 -48 52
-90 92 -63 24 16 35 51 23 73 -9 17 -8 20 3 17 21 -7 21 -62 0 -88 -27 -33
-87 -33 -113 -1 -19 23 -26 71 -12 84 11 12 13 8 7 -22z m96 14 c16 -19 10
-45 -15 -61 -39 -26 -86 31 -53 64 16 16 53 15 68 -3z"
                />
                <path
                  d="M300 295 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"
                />
                <path
                  d="M243 95 c0 -8 9 -15 19 -15 10 0 18 7 18 15 0 8 -8 15 -18 15 -10 0
-19 -7 -19 -15z"
                />
              </g>
            </svg>
          </div>
          <span>Procedimentos</span>
        </NavHashLink>
        <NavHashLink
          smooth
          activeClassName="mobSelected"
          className="mobileLinks"
          to="/#aboutUs"
        >
          <div className="iconContainer">
            <svg
              fill="#cca352"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16 7h8v17h-24v-24h16v7zm-9 12h-2v4h2v-4zm4 0h-2v4h2v-4zm7 0h-2v4h2v-4zm4-10h-6v8h4v5h2v-13zm-8-7h-12v20h1v-5h10v5h1v-20zm-8 13h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm8-2v2h-2v-2h2zm-14-1h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm6-2h2v2h-2v-2zm-12-1h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm-6-3h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2z" />
            </svg>
          </div>
          <span>Sobre nós</span>
        </NavHashLink>
        <NavHashLink
          smooth
          activeClassName="mobSelected"
          className="mobileLinks"
          to="/sobre-mim/#aboutMe"
        >
          <div className="iconContainer">
            <svg
              fill="#cca352"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M20.823 19.307c-2.967-.681-6.578-2.437-5.514-4.723.684 1.125 2.8 1.777 4.449.804-4.747-1.204 2.334-9.471-3.871-14.105-1.134-.853-2.526-1.283-3.911-1.283-1.379 0-2.752.425-3.863 1.283-6.206 4.634.876 12.901-3.872 14.105 1.652.974 3.771.292 4.451-.804 1.064 2.287-2.551 4.043-5.514 4.723-2.979.683-3.178 2.468-3.178 4.004l.005.689h1.996c0-1.96-.032-2.364 1.625-2.744 1.633-.375 5.568-1.53 6.855-4.162 1.011-2.067-.02-3.45-1.528-6.722-.133 1.109-1.001 1.613-1.001 1.613-.049-.692-.15-1.366-.241-1.967-.486-3.225-.638-5.463 1.623-7.152 1.498-1.156 3.787-1.159 5.357.019 2.236 1.67 2.084 3.909 1.598 7.133-.089.591-.188 1.253-.238 1.933 0 0-.831-.404-.975-1.604-1.535 3.296-2.573 4.669-1.556 6.747 1.286 2.632 5.223 3.788 6.855 4.162 1.67.384 1.625.8 1.625 2.744h1.994l.005-.693c.001-1.536-.199-3.318-3.176-4z" />
            </svg>
          </div>
          <span>Sobre mim</span>
        </NavHashLink>
        <NavHashLink
          smooth
          activeClassName="mobSelected"
          className="mobileLinks"
          to="/depoimentos/#testimonials"
        >
          <div className="iconContainer">
            <svg
              fill="#cca352"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
            </svg>
          </div>
          <span>Depoimentos</span>
        </NavHashLink>
        <NavHashLink
          smooth
          activeClassName="mobSelected"
          className="mobileLinks"
          to="/#contact"
        >
          <div className="iconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#cca352"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </div>
          <span>Contato</span>
        </NavHashLink>
      </div>
    </Styles>
  );
};

export default NavBar;
