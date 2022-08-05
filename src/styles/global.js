import { createGlobalStyle } from "styled-components";

import watermark from "../media/watermark.png";

export default createGlobalStyle`
  /*General Styles Start*/
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  font-family: Helvetica, sans-serif;
  font-weight: lighter;

  color: #f8e9d2;
}
html{
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  background: rgb(92,76,54);
  background: linear-gradient(315deg,rgba(180,132,9,0.6) 3%,rgba(37,31,22,0.9) 65%) !important;
}
a {
  text-decoration: none;
  color: #f8e9d2;
  transition: color 0.2s ease;
}
a:hover {
  color: #f8e9d2d5;
}
#watermark {
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url("${watermark}");
      width: 100vw;
      height: 100%;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
/*General Styles End*/
`;
