import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import MuiDialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { PrimaryButton } from '../../Buttons';
import {
  Title, Content, Description, Image, Container,
} from './styles';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function VideoInformationDialog({
  open, onClose, backgroundImage, videoTitle, videoDescription, onClickButton,
}) {
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
      <Content>
        <Image
          mt={-2.5}
          bgimg={backgroundImage}
        >
          <Container>
            <Box p={3}>
              <Title>{videoTitle}</Title>
              <Description>{videoDescription}</Description>
            </Box>
            <Box pl={3} pr={3} pb={3} display="flex" justifyContent="flex-end">
              <PrimaryButton
                onClick={onClickButton}
                startIcon={<PlayArrowIcon />}
              >
                Assistir
              </PrimaryButton>
            </Box>
          </Container>
        </Image>
      </Content>
    </MuiDialog>
  );
}

VideoInformationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  videoDescription: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default VideoInformationDialog;
