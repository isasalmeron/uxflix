import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Tooltip from '@material-ui/core/Tooltip';

import LogoImg from '../../assets/images/LogoImg.png';
import { SecondaryButton } from '../Button';
import { Wrapper, Logo, ToolbarWrapper } from './styles';

function AppBar({ hasButton }) {
  const history = useHistory();
  const handleOnClickIcon = () => history.push('/');
  const handleOnClickButton = () => history.push('/novo-video');

  return (
    <Wrapper position="sticky">
      <ToolbarWrapper>
        <Tooltip title="Página inicial">
          <IconButton
            aria-label="home"
            onClick={handleOnClickIcon}
          >
            <Logo src={LogoImg} />
          </IconButton>
        </Tooltip>
        {hasButton && (
          <Box p={2}>
            <SecondaryButton
              startIcon={<VideoLibraryIcon />}
              onClick={handleOnClickButton}
            >
              Novo vídeo
            </SecondaryButton>
          </Box>
        )}
      </ToolbarWrapper>
    </Wrapper>
  );
}

AppBar.defaultProps = {
  hasButton: false,
};

AppBar.propTypes = {
  hasButton: PropTypes.bool,
};

export default AppBar;
