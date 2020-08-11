import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export const Title = styled(Typography)`
  font-size: 24px;
  line-height: 1;
  margin-bottom: 16px;
  margin-left: 3%;
  display: inline-block;
  padding: 16px;
  line-height: 1;
  border-radius: 4px;
  background-color: ${({ bgcolor }) => bgcolor };

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px
  }
`;

export const VideoCardGroupContainer = styled(Box)`
  color: white;
  min-height: 197px;
  margin-left: 4%;
  margin-bottom: 40px;
`;
