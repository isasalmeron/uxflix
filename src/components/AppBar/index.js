import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import LogoImg from '../../assets/images/LogoImg.png';
import { SecondaryButton } from '../Button';
import { Logo, AppBarWrapper, ToolbarWrapper } from './styles';

function AppBar({ hasButton }) {
  const history = useHistory();
  const handleOnClickIcon = () => history.push('/');

  return (
    <AppBarWrapper position="sticky">
      <ToolbarWrapper>
        <IconButton
          aria-label="home"
          onClick={handleOnClickIcon}
        >
          <Logo src={LogoImg} />
        </IconButton>
        {hasButton && (
          <SecondaryButton startIcon={<VideoLibraryIcon />}>
            Novo vídeo
          </SecondaryButton>
        )}
      </ToolbarWrapper>
    </AppBarWrapper>
  );
}

AppBar.defaultProps = {
  hasButton: false,
};

AppBar.propTypes = {
  hasButton: PropTypes.bool,
};

export default AppBar;
