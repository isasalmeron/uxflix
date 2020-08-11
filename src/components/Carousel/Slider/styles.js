import styled from 'styled-components';

import Box from '@material-ui/core/Box';

const Container = styled(Box)`
  .slick-slider {
    &:hover .slick-next {
      @media (min-width: 800px) {
        display: block !important;
      }
    }

    &:hover .slick-prev {
      @media (min-width: 800px) {
        display: block !important;
      }
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    height: 100%;
    transform: initial;
    display: none !important;

    &:hover {
      color: white !important;
      background: rgba(0,0,0,0.5);
    }
  }
  
  .slick-prev {
    left: -5%;
  }
  .slick-next {
    right: 0;
  }
`;

export default Container;
