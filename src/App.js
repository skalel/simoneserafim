import { BrowserRouter } from "react-router-dom";
import InstaButton from "./components/InstaButton/index.js";

import WppButton from "./components/WppButton/index.js";

import Routes from "./routes/index.js";

import GlobalStyle from "./styles/global.js";

const App = () => (
  <>
    <BrowserRouter>
      <div id="watermark"></div>
      <Routes />
      <WppButton />
      <InstaButton />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
