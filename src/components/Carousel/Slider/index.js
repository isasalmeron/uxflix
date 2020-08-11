import React from 'react';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';

import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';
import Container from './styles';

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      infinite: true,
      swipeToSlide: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
