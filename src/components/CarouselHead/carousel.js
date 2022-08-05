import React, { useState } from "react";
import { v4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

import styled from "styled-components";

import banner1 from "../../media/Homepage/1.jpg";
import banner2 from "../../media/Homepage/2.jpg";
import banner3 from "../../media/Homepage/3.jpg";
import banner4 from "../../media/Homepage/4.jpg";
import banner5 from "../../media/Homepage/5.jpg";
import banner6 from "../../media/Homepage/6.JPG";

const Style = styled.div`
  width: 80%;
  height: 600px;
  margin: 0 auto 16px auto;

  margin-top: -100px;
  padding-top: 100px;

  @media screen and (max-width: 600px) {
    width: 30%;
    height: 400px;
    margin: 0px auto 16px auto;
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    height: 500px;
    width: 50%;
    margin: 0px auto 24px auto;
  }
`;

export const CarouselHead = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  let slides = [
    {
      key: v4(),
      content: <img src={banner1} alt="1" />,
    },
    {
      key: v4(),
      content: <img src={banner2} alt="2" />,
    },
    {
      key: v4(),
      content: <img src={banner3} alt="3" />,
    },
    {
      key: v4(),
      content: <img src={banner4} alt="4" />,
    },
    {
      key: v4(),
      content: <img src={banner5} alt="5" />,
    },
    {
      key: v4(),
      content: <img src={banner6} alt="6" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <Style
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      id="top"
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </Style>
  );
};
