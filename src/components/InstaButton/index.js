import styled from "styled-components";
import React from "react";

const Style = styled.div`
  width: 20px;
  height: 20px;

  @keyframes nudge {
    100%,
    20% {
      transform: translate(0, 0);
    }
    0% {
      transform: translate(0, 5px);
      transform: rotate(2deg);
    }
    10% {
      transform: translate(0, -5px);
      transform: rotate(-2deg);
    }
  }

  #textBox {
    position: fixed !important;
    background-color: #f2f2f2 !important;
    left: 80px;
    bottom: 15px;
    font-size: 90% !important;
    padding: 10px !important;
    margin: 0 auto !important;
    border-radius: 5px !important;
    box-shadow: rgba(0, 0, 0, 0.16) 0 2.5px 10px !important;

    & > span {
      color: #251f16 !important;
      font-weight: 700 !important;
      font-size: 90% !important;
    }

    animation: nudge 2s linear infinite !important;

    @media screen and (max-width: 810px) {
      bottom: 15px;
      left: 80px;
    }
  }

  #instaWrapper {
    position: fixed !important;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    border-radius: 10px;
    left: 20px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    transition: 1s !important;

    &:hover {
      transform: scale(1.1) !important;
      filter: brightness(1.3) !important;
    }
  }
  .instaButton {
    display: flex;
    justify-content: center;
    margin: 4px;
    & > img {
      width: 100%;
      color: #f2f2f2;
    }
  }
`;

export default function InstaButton() {
  return (
    <Style>
      <div id="instaWrapper">
        <a
          href="https://www.instagram.com/studiosimoneserafim/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="instaButton">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljk5OTc0NiwyMy4wNjM1MyBDMTYyLjE3NzM4NSwyMy4wNjM1MyAxNjYuMjI1MzkzLDIzLjE5MzYwMjcgMTc5LjcyMjQ3NiwyMy44MDk0MTYxIEMxOTIuMjAyMzUsMjQuMzc4OTkyNiAxOTguOTc5ODUzLDI2LjQ2NDIyMTggMjAzLjQ5MDczNiwyOC4yMTY2NDc3IEMyMDkuNDY0OTM4LDMwLjUzODY1MDEgMjEzLjcyOTM5NSwzMy4zMTI4NTg2IDIxOC4yMDgyNjgsMzcuNzkxNzMxOSBDMjIyLjY4NzE0MSw0Mi4yNzA2MDUyIDIyNS40NjEzNSw0Ni41MzUwNjE3IDIyNy43ODI4NDQsNTIuNTA5MjYzOCBDMjI5LjUzNTc3OCw1Ny4wMjAxNDcyIDIzMS42MjEwMDcsNjMuNzk3NjUwNCAyMzIuMTkwNTg0LDc2LjI3NzAxNiBDMjMyLjgwNjM5Nyw4OS43NzQ2MDc1IDIzMi45MzY0Nyw5My44MjI2MTQ3IDIzMi45MzY0NywxMjguMDAwMjU0IEMyMzIuOTM2NDcsMTYyLjE3Nzg5MyAyMzIuODA2Mzk3LDE2Ni4yMjU5MDEgMjMyLjE5MDU4NCwxNzkuNzIyOTg0IEMyMzEuNjIxMDA3LDE5Mi4yMDI4NTggMjI5LjUzNTc3OCwxOTguOTgwMzYxIDIyNy43ODI4NDQsMjAzLjQ5MTI0NCBDMjI1LjQ2MTM1LDIwOS40NjU0NDYgMjIyLjY4NzE0MSwyMTMuNzI5OTAzIDIxOC4yMDgyNjgsMjE4LjIwODc3NiBDMjEzLjcyOTM5NSwyMjIuNjg3NjQ5IDIwOS40NjQ5MzgsMjI1LjQ2MTg1OCAyMDMuNDkwNzM2LDIyNy43ODMzNTIgQzE5OC45Nzk4NTMsMjI5LjUzNjI4NiAxOTIuMjAyMzUsMjMxLjYyMTUxNiAxNzkuNzIyNDc2LDIzMi4xOTEwOTIgQzE2Ni4yMjc0MjUsMjMyLjgwNjkwNSAxNjIuMTc5NDE4LDIzMi45MzY5NzggMTI3Ljk5OTc0NiwyMzIuOTM2OTc4IEM5My44MjAwNzQyLDIzMi45MzY5NzggODkuNzcyMDY3LDIzMi44MDY5MDUgNzYuMjc3MDE2LDIzMi4xOTEwOTIgQzYzLjc5NzE0MjQsMjMxLjYyMTUxNiA1Ny4wMTk2MzkxLDIyOS41MzYyODYgNTIuNTA5MjYzOCwyMjcuNzgzMzUyIEM0Ni41MzQ1NTM2LDIyNS40NjE4NTggNDIuMjcwMDk3MSwyMjIuNjg3NjQ5IDM3Ljc5MTIyMzgsMjE4LjIwODc3NiBDMzMuMzEyMzUwNSwyMTMuNzI5OTAzIDMwLjUzODE0MiwyMDkuNDY1NDQ2IDI4LjIxNjY0NzcsMjAzLjQ5MTI0NCBDMjYuNDYzNzEzOCwxOTguOTgwMzYxIDI0LjM3ODQ4NDUsMTkyLjIwMjg1OCAyMy44MDg5MDgsMTc5LjcyMzQ5MiBDMjMuMTkzMDk0NiwxNjYuMjI1OTAxIDIzLjA2MzAyMTksMTYyLjE3Nzg5MyAyMy4wNjMwMjE5LDEyOC4wMDAyNTQgQzIzLjA2MzAyMTksOTMuODIyNjE0NyAyMy4xOTMwOTQ2LDg5Ljc3NDYwNzUgMjMuODA4OTA4LDc2LjI3NzUyNDEgQzI0LjM3ODQ4NDUsNjMuNzk3NjUwNCAyNi40NjM3MTM4LDU3LjAyMDE0NzIgMjguMjE2NjQ3Nyw1Mi41MDkyNjM4IEMzMC41MzgxNDIsNDYuNTM1MDYxNyAzMy4zMTIzNTA1LDQyLjI3MDYwNTIgMzcuNzkxMjIzOCwzNy43OTE3MzE5IEM0Mi4yNzAwOTcxLDMzLjMxMjg1ODYgNDYuNTM0NTUzNiwzMC41Mzg2NTAxIDUyLjUwOTI2MzgsMjguMjE2NjQ3NyBDNTcuMDE5NjM5MSwyNi40NjQyMjE4IDYzLjc5NzE0MjQsMjQuMzc4OTkyNiA3Ni4yNzY1MDc5LDIzLjgwOTQxNjEgQzg5Ljc3NDA5OTQsMjMuMTkzNjAyNyA5My44MjIxMDY2LDIzLjA2MzUzIDEyNy45OTk3NDYsMjMuMDYzNTMgTTEyNy45OTk3NDYsMCBDOTMuMjM2Nzc5MSwwIDg4Ljg3ODMyNDcsMC4xNDczNDgwNzIgNzUuMjI1NzYzNywwLjc3MDI3NDc0OSBDNjEuNjAxMTQ4LDEuMzkyMTg1MjMgNTIuMjk2ODc5NCwzLjU1NTY2MTQxIDQ0LjE1NDYyODEsNi43MjAwODgyOCBDMzUuNzM3NDk2Niw5Ljk5MTIxNTQ4IDI4LjU5OTI0NDYsMTQuMzY3OTYxMyAyMS40ODMzNDg5LDIxLjQ4Mzg1NyBDMTQuMzY3NDUzMiwyOC41OTk3NTI3IDkuOTkwNzA3MzksMzUuNzM4MDA0NiA2LjcxOTU4MDE5LDQ0LjE1NTEzNjIgQzMuNTU1MTUzMzEsNTIuMjk3Mzg3NSAxLjM5MTY3NzE0LDYxLjYwMTY1NjEgMC43Njk3NjY2NTMsNzUuMjI2MjcxOCBDMC4xNDY4Mzk5NzUsODguODc4MzI0NyAwLDkzLjIzNzI4NzIgMCwxMjguMDAwMjU0IEMwLDE2Mi43NjMyMjEgMC4xNDY4Mzk5NzUsMTY3LjEyMjE4MyAwLjc2OTc2NjY1MywxODAuNzc0MjM2IEMxLjM5MTY3NzE0LDE5NC4zOTg4NTIgMy41NTUxNTMzMSwyMDMuNzAzMTIxIDYuNzE5NTgwMTksMjExLjg0NTM3MiBDOS45OTA3MDczOSwyMjAuMjYxOTk1IDE0LjM2NzQ1MzIsMjI3LjQwMDc1NSAyMS40ODMzNDg5LDIzNC41MTY2NTEgQzI4LjU5OTI0NDYsMjQxLjYzMjU0NyAzNS43Mzc0OTY2LDI0Ni4wMDkyOTMgNDQuMTU0NjI4MSwyNDkuMjgwNDIgQzUyLjI5Njg3OTQsMjUyLjQ0NDg0NyA2MS42MDExNDgsMjU0LjYwODMyMyA3NS4yMjU3NjM3LDI1NS4yMzAyMzMgQzg4Ljg3ODMyNDcsMjU1Ljg1MzE2IDkzLjIzNjc3OTEsMjU2IDEyNy45OTk3NDYsMjU2IEMxNjIuNzYyNzEzLDI1NiAxNjcuMTIxNjc1LDI1NS44NTMxNiAxODAuNzczNzI4LDI1NS4yMzAyMzMgQzE5NC4zOTgzNDQsMjU0LjYwODMyMyAyMDMuNzAyNjEzLDI1Mi40NDQ4NDcgMjExLjg0NDg2NCwyNDkuMjgwNDIgQzIyMC4yNjE5OTUsMjQ2LjAwOTI5MyAyMjcuNDAwMjQ3LDI0MS42MzI1NDcgMjM0LjUxNjE0MywyMzQuNTE2NjUxIEMyNDEuNjMyMDM5LDIyNy40MDA3NTUgMjQ2LjAwODc4NSwyMjAuMjYyNTAzIDI0OS4yNzk5MTIsMjExLjg0NTM3MiBDMjUyLjQ0NDMzOSwyMDMuNzAzMTIxIDI1NC42MDc4MTUsMTk0LjM5ODg1MiAyNTUuMjI5NzI1LDE4MC43NzQyMzYgQzI1NS44NTI2NTIsMTY3LjEyMjE4MyAyNTYsMTYyLjc2MzIyMSAyNTYsMTI4LjAwMDI1NCBDMjU2LDkzLjIzNzI4NzIgMjU1Ljg1MjY1Miw4OC44NzgzMjQ3IDI1NS4yMjk3MjUsNzUuMjI2MjcxOCBDMjU0LjYwNzgxNSw2MS42MDE2NTYxIDI1Mi40NDQzMzksNTIuMjk3Mzg3NSAyNDkuMjc5OTEyLDQ0LjE1NTEzNjIgQzI0Ni4wMDg3ODUsMzUuNzM4MDA0NiAyNDEuNjMyMDM5LDI4LjU5OTc1MjcgMjM0LjUxNjE0MywyMS40ODM4NTcgQzIyNy40MDAyNDcsMTQuMzY3OTYxMyAyMjAuMjYxOTk1LDkuOTkxMjE1NDggMjExLjg0NDg2NCw2LjcyMDA4ODI4IEMyMDMuNzAyNjEzLDMuNTU1NjYxNDEgMTk0LjM5ODM0NCwxLjM5MjE4NTIzIDE4MC43NzM3MjgsMC43NzAyNzQ3NDkgQzE2Ny4xMjE2NzUsMC4xNDczNDgwNzIgMTYyLjc2MjcxMywwIDEyNy45OTk3NDYsMCBaIE0xMjcuOTk5NzQ2LDYyLjI3MDMxMTUgQzkxLjY5ODI2Miw2Mi4yNzAzMTE1IDYyLjI2OTgwMzQsOTEuNjk4NzcgNjIuMjY5ODAzNCwxMjguMDAwMjU0IEM2Mi4yNjk4MDM0LDE2NC4zMDE3MzggOTEuNjk4MjYyLDE5My43MzAxOTcgMTI3Ljk5OTc0NiwxOTMuNzMwMTk3IEMxNjQuMzAxMjMsMTkzLjczMDE5NyAxOTMuNzI5Njg5LDE2NC4zMDE3MzggMTkzLjcyOTY4OSwxMjguMDAwMjU0IEMxOTMuNzI5Njg5LDkxLjY5ODc3IDE2NC4zMDEyMyw2Mi4yNzAzMTE1IDEyNy45OTk3NDYsNjIuMjcwMzExNSBaIE0xMjcuOTk5NzQ2LDE3MC42NjcxNzUgQzEwNC40MzU3NDEsMTcwLjY2NzE3NSA4NS4zMzI4MjUyLDE1MS41NjQyNTkgODUuMzMyODI1MiwxMjguMDAwMjU0IEM4NS4zMzI4MjUyLDEwNC40MzYyNDkgMTA0LjQzNTc0MSw4NS4zMzMzMzMzIDEyNy45OTk3NDYsODUuMzMzMzMzMyBDMTUxLjU2Mzc1MSw4NS4zMzMzMzMzIDE3MC42NjY2NjcsMTA0LjQzNjI0OSAxNzAuNjY2NjY3LDEyOC4wMDAyNTQgQzE3MC42NjY2NjcsMTUxLjU2NDI1OSAxNTEuNTYzNzUxLDE3MC42NjcxNzUgMTI3Ljk5OTc0NiwxNzAuNjY3MTc1IFogTTIxMS42ODYzMzgsNTkuNjczNDI4NyBDMjExLjY4NjMzOCw2OC4xNTY2MTI5IDIwNC44MDk3NTUsNzUuMDMzNzAzMSAxOTYuMzI2NTcxLDc1LjAzMzcwMzEgQzE4Ny44NDMzODcsNzUuMDMzNzAzMSAxODAuOTY2Mjk3LDY4LjE1NjYxMjkgMTgwLjk2NjI5Nyw1OS42NzM0Mjg3IEMxODAuOTY2Mjk3LDUxLjE5MDI0NDUgMTg3Ljg0MzM4Nyw0NC4zMTM2NjI0IDE5Ni4zMjY1NzEsNDQuMzEzNjYyNCBDMjA0LjgwOTc1NSw0NC4zMTM2NjI0IDIxMS42ODYzMzgsNTEuMTkwMjQ0NSAyMTEuNjg2MzM4LDU5LjY3MzQyODcgWiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"
              alt="Instagram Icon"
            />
          </div>
        </a>
      </div>
      <div id="textBox">
        <span>Nosso Instagram</span>
      </div>
    </Style>
  );
}
