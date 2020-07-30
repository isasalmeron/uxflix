import styled from 'styled-components';

export const ContentAreaContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  min-width: fill-available;
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: block;
  text-align: center;
  align-self: flex-end;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

ContentAreaContainer.Description = styled.p`
  font-size: 24px;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

export const BannerContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: auto;
    min-height: 65vh;
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
