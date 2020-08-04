import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export const Content = styled(Box)`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  position: relative;
  z-index: 10;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

export const Wrapper = styled(Box)`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledTypography = styled(Typography)`
  font-weight: 300;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: ${({ mobilefontsize }) => mobilefontsize};
    text-align: right;
    display: ${({ isdescription }) => (isdescription ? 'none' : 'block')};
  }
`;

export const Banner = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;
