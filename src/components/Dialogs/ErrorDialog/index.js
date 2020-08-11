import React from 'react';
import PropTypes from 'prop-types';

import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import Box from '@material-ui/core/Box';
import MuiDialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import {
  Title, Content, StyledTypography, Description,
} from './styles';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function ErrorDialog({ open, onClose }) {
  return (
    <MuiDialog
      PaperProps={{
        style: {
          backgroundColor: 'black',
          color: 'white',
        },
      }}
      TransitionComponent={Transition}
      open={open}
      keepMounted
      onClose={onClose}
    >
      <Title disableTypography>
        <Box display="flex" alignItems="center">
          <Box mr={3} display="flex">
            <SentimentDissatisfiedIcon style={{ fontSize: 32 }} />
          </Box>
          <StyledTypography>
            Ocorreu um erro!
          </StyledTypography>
        </Box>
      </Title>
      <Content>
        <Description>
          Estamos com problemas no servidor e não conseguimos carregar o conteúdo dessa página
          no momento. Por favor, tente novamente mais tarde!
        </Description>
      </Content>
    </MuiDialog>
  );
}

ErrorDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorDialog;
