import styled from 'styled-components';

import Box from '@material-ui/core/Box';

import { PrimaryButton, InformationButton } from '../../Buttons';

export const VideoCardWrapper = styled(Box)`
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: .4s;
  margin-right: 16px;
 
  &:hover {
    border: 2px solid;
    width: 498px;
  }

  &:hover Button {
    display: flex;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    width: 260px;
    padding: 8px;

    &:hover {
      width: 90vw;
    }
  }
`;

export const MoreInfoButton = styled(InformationButton)`
  display: none;
  padding: 6px 22px;
  font-size: 14px;

  @media (min-width: 800px) {
    font-size: 16px;
    padding: 8px 22px;
  }
`;

export const WatchButton = styled(PrimaryButton)`
  display: none;
  padding: 6px 22px;
  font-size: 14px;

  @media (min-width: 800px) {
    font-size: 16px;
    padding: 8px 22px;
  }
`;

export const ButtonWrapper = styled(Box)`
  margin: 16px;
  display: inline-block;

  @media (max-width: 800px) {
    display: block;
  }
`;
