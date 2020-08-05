import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';

export const Title = withStyles({
  root: {
    color: '#CD0CFF',
  },
})(MuiDialogTitle);

export const Content = withStyles({
  root: {
    paddingBottom: '24px',
  },
})(MuiDialogContent);

export const StyledTypography = styled(Typography)`
  font-size: 24px;
  align-self: center;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Description = styled(Typography)`
  font-size: 16px;
  line-height: 1.5;
`;
