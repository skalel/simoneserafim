import { CarouselHead } from "../../components/CarouselHead/carousel";

import NavBar from "../../components/NavBar";
import AboutUs from "../../components/AboutUs";
import FormHandler from "../../components/Contact";
import Footer from "../../components/Footer";

export const Homepage = () => (
  <>
    <NavBar />
    <div id="index"></div>
    <CarouselHead />
    <AboutUs />
    <FormHandler />
    <Footer />
  </>
);

export default Homepage;
