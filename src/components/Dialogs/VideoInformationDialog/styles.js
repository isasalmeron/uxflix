import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export const Content = withStyles({
  root: {
    padding: '0',
  },
})(MuiDialogContent);

export const Image = styled(Box)`
  background-image: ${({ bgimg }) => `url(${bgimg})`}; 
  background-size: cover;
  background-position: center;
`;

export const Container = styled(Box)`
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const Title = styled(Typography)`
  font-size: 20px;
  line-height: 1.5;
  padding-bottom: 24px;
  font-weight: 500;
  color: #CD0CFF;
`;

export const Description = styled(Typography)`
  font-size: 16px;
  line-height: 1.5;
`;
