import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoImg from '../../assets/img/LogoImg.png';
import { SecondaryButton } from '../Button';
import { Logo, AppBarWrapper } from './styles';

function AppBar({ hasButton }) {
  return (
    <AppBarWrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="UXflix logo" />
      </Link>
      {hasButton && (
        <SecondaryButton as={Link} to="/cadastro/video">
          Novo vídeo
        </SecondaryButton>
      )}
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
