import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const Logo = styled.img`
  max-width: 90px;
`;

export const Wrapper = withStyles({
  root: {
    height: '74px',
    background: 'black',
    justifyContent: 'center',
    borderBottom: '2px solid #CD0CFF',
    boxShadow: '1px -13px 20px 20px hsla(0, 0%, 100%, .281)',
  },
})(AppBar);

export const ToolbarWrapper = withStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    padding: '0px 40px',

    '@media (max-width: 900px)': {
      padding: '0px 0px 0px 8px',
    },
  },
})(Toolbar);
