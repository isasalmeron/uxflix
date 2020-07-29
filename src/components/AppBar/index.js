import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/img/LogoImg.png';
import Button from '../Button';
import { Logo, AppBarWrapper } from './styles';

function AppBar() {
  return (
    <AppBarWrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="UXflix logo"/>
      </Link>
      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </AppBarWrapper>
  );
}

export default AppBar;
